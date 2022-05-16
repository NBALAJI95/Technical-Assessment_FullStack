import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import TopNav from "./TopNav";
import {TEST_PLACE_1, TEST_PLACE_2} from "./test_data";

describe('Testing TopNav renders', () => {
   beforeEach(() => {
       render(
           <TopNav
               placesState={[[TEST_PLACE_1, TEST_PLACE_2], jest.fn()]}
               placeState={["surat", jest.fn()]}
           />
       );
   });

   it('renders top nav container', () => {
       expect(screen.getByTestId("top-nav-container")).toBeInTheDocument();
   });

    it('renders place input', () => {
        expect(screen.getByTestId("place-input")).toBeInTheDocument();
        expect(screen.getByTestId("place-input")).toHaveValue("surat");
    });

    it('renders search button', () => {
        expect(screen.getByTestId("search-button")).toBeInTheDocument();
    });
});

const originalAlert = global.alert;

describe('Testing TopNav components behavior', () => {
    afterEach(() => {
        global.alert = originalAlert;
    });

    it('search button is disabled when place is empty', () => {
        render(
            <TopNav
                placesState={[[TEST_PLACE_1, TEST_PLACE_2], jest.fn()]}
                placeState={["", jest.fn()]}
            />
        );

        expect(screen.getByTestId("search-button")).toBeDisabled();
    });

    it('error message is popped up when place to add is already present in the list', async () => {
        const alertMock = jest.fn();
        const setPlacesStateMock = jest.fn();
        const setPlaceStateMock = jest.fn();

        global.alert = alertMock;

        render(
            <TopNav
                placesState={[[TEST_PLACE_1, TEST_PLACE_2], setPlacesStateMock]}
                placeState={["Mumbai", setPlaceStateMock]}
            />
        );

        fireEvent.click(screen.getByTestId("search-button"));
        expect(alertMock).toHaveBeenCalledWith("Given place Mumbai already present in the list");
        expect(setPlaceStateMock).not.toHaveBeenCalled();
        expect(setPlacesStateMock).not.toHaveBeenCalled();
    });

    it('Fetch API is called with given place', async () => {
        const alertMock = jest.fn();
        const setPlacesStateMock = jest.fn();
        const setPlaceStateMock = jest.fn();

        global.alert = alertMock;

        const originalFetch = global.fetch;
        const fetchMock = jest.fn(() => Promise.resolve({  json: () => Promise.resolve({cod: 400}), }));

        // @ts-ignore
        global.fetch = fetchMock;

        render(
            <TopNav
                placesState={[[TEST_PLACE_1, TEST_PLACE_2], setPlacesStateMock]}
                placeState={["Waco", setPlaceStateMock]}
            />
        );

        fireEvent.click(screen.getByTestId("search-button"));

        expect(fetchMock).toHaveBeenCalledWith(`http://localhost:3000/weather?city=Waco`);
        global.fetch = originalFetch;
    });
})