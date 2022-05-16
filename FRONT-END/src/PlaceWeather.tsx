import React from 'react';
import {IPlaceWeather} from "./App";
import "./PlaceWeather.css";

interface IPlaceWeatherProps {
    weatherDetails: IPlaceWeather
}

export default ({ weatherDetails }: IPlaceWeatherProps) => {
    const {
        name, dt,
        main: { feels_like, temp, humidity },
        weather
    } = weatherDetails

    return (
        <div data-testid="place-weather-container">
            <strong data-testid="place-name">{name}</strong>
            <hr />
            <div data-testid="place-weather-description" className="flex">
                <p className="date">{new Date(+`${dt}000`).toDateString()}</p>
                <p className="description">{weather[0].main}</p>
            </div>

            <p data-testid="place-weather-temperature" className="temp">Temperature: {temp} &deg;C</p>
            <p data-testid="place-weather-feels-like" className="temp">Feels like: {feels_like} &deg;C</p>
            <p data-testid="place-weather-humidity" className="temp">Humidity: {humidity} %</p>
        </div>
    );
};