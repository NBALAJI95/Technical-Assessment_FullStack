import React from 'react';
import PlaceWeather from "./PlaceWeather";
import "./App.css"
import {IPlaceWeather} from "./App";

interface IPlacesListProps {
    places: IPlaceWeather[];
}

export default ({ places }: IPlacesListProps) => {
    return (
        <div className="row" data-testid="places-list-container">
            {
                places.map((place, i) => {
                    return (
                        <div data-testid="places-list-column" className="column" key={i}>
                            <div data-testid="places-list-card" className="card">
                                <PlaceWeather weatherDetails={place} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};