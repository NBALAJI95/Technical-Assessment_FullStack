import React from 'react';
import { render, screen } from '@testing-library/react';
import PlacesList from "./PlacesList";
import {TEST_PLACE_1, TEST_PLACE_2, TEST_PLACE_3} from "./test_data";

describe('PlacesList test suite', () => {
    it('renders places list container', () => {
        render(<PlacesList places={[TEST_PLACE_1, TEST_PLACE_2, TEST_PLACE_3]} />);
        expect(screen.getByTestId("places-list-container")).toBeInTheDocument();
    });

    it('renders columns and cards for each place', () => {
        render(<PlacesList places={[TEST_PLACE_1, TEST_PLACE_2, TEST_PLACE_3]} />);
        expect(screen.getAllByTestId("places-list-column").length).toBe(3);
        expect(screen.getAllByTestId("places-list-card").length).toBe(3);
    });
});