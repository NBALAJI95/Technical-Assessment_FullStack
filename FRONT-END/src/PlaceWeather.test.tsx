import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaceWeather from "./PlaceWeather";

describe('Place Weather test suite', () => {
    beforeEach(() => {
        render(
            <PlaceWeather
                weatherDetails={{
                    name: "Test-Name",
                    dt: (1652712764),
                    main: {
                        feels_like: 38,
                        temp: 35,
                        humidity: 55
                    },
                    weather: [{
                        id: 1234,
                        main: "test main",
                        description: "test desc",
                        icon:  "test icon"
                    }]
                }}
            />
        );
    });

   it('renders place weather container without any error', () => {
       expect(screen.getByTestId("place-weather-container")).toBeInTheDocument();
   });

    it('renders place name with correct value', () => {
        expect(screen.getByTestId("place-name")).toBeInTheDocument();
        expect(screen.getByText("Test-Name")).toBeInTheDocument();
    });

    it('renders weather description correctly', () => {
        expect(screen.getByTestId("place-weather-description")).toBeInTheDocument();
        expect(screen.getByText('Mon May 16 2022')).toBeInTheDocument();
        expect(screen.getByText('test main')).toBeInTheDocument();
    });

    it('renders temperature with correct value', () => {
        expect(screen.getByTestId("place-weather-temperature")).toBeInTheDocument();
        expect(screen.getByText(`Temperature: 35 °C`)).toBeInTheDocument();
    });

    it('renders feels like with correct value', () => {
        expect(screen.getByTestId("place-weather-feels-like")).toBeInTheDocument();
        expect(screen.getByText(`Feels like: 38 °C`)).toBeInTheDocument();
    });

    it('renders humidity with correct value', () => {
        expect(screen.getByTestId("place-weather-humidity")).toBeInTheDocument();
        expect(screen.getByText(`Humidity: 55 %`)).toBeInTheDocument();
    });
});