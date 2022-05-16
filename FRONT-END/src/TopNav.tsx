import React from "react";
import {IPlaceWeather} from "./App";

type placeState = [string, React.Dispatch<React.SetStateAction<string>>];
type placesState = [IPlaceWeather[], React.Dispatch<React.SetStateAction<IPlaceWeather[]>>];

interface ITopNavProps {
    placeState: placeState;
    placesState: placesState;
}

export default ({ placeState, placesState }: ITopNavProps) => {
    const [place, setPlace] = placeState;
    const [places, setPlaces] = placesState;

    const searchOnClickHandler = () => {
        let isPlaceAlreadyPresent = false;

        for (const placeName of places) {
            if (place.toLocaleLowerCase() === placeName.name.toLocaleLowerCase()) {
                isPlaceAlreadyPresent = true;
                alert(`Given place ${place} already present in the list`);
                break;
            }
        }

        if (!isPlaceAlreadyPresent)
            fetch(`http://localhost:3000/weather?city=${place}`)
                .then(res => res.json())
                .then((result: IPlaceWeather)=> {
                    if (result.cod === 200) {
                        setPlaces([...places, result]);
                        setPlace('');
                    } else {
                        alert(`Given place ${place} not found in Weather API!`);
                    }
                });
    }

    return (
        <div data-testid="top-nav-container">
            <input
                data-testid="place-input"
                value={place}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPlace(event.target.value);
                }}
            />
            <button
                data-testid="search-button"
                style={{ backgroundColor: 'tomato' }}
                disabled={place.length === 0}
                onClick={() => searchOnClickHandler()}
            >
                Add
            </button>
        </div>
    );
};