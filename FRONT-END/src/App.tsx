import React from 'react';
import TopNav from "./TopNav";
import PlacesList from "./PlacesList";
import './App.css';

interface IMainDetails {
    feels_like: number;
    humidity: number;
    pressure?: number;
    temp: number;
    temp_max?: number;
    temp_min?: number;
}

interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IPlaceWeather {
    id?: number;
    dt: number;
    cod?: number;
    main: IMainDetails;
    name: string;
    weather: IWeather[]
}

function App() {
    const [place, setPlace] = React.useState<string>("");
    const [places, setPlaces] = React.useState<IPlaceWeather[]>([]);

    console.log('places', places);
    return (
        <div className="App" data-testid="app-container">
            <div className="top-nav" data-testid="app-bar">
                <TopNav placeState={[place, setPlace]} placesState={[places, setPlaces]} />
            </div>
            <strong data-testid="places-heading">Places List:</strong>
            <div data-testid="places-list">
                <PlacesList places={places} />
            </div>
        </div>
    );
}

export default App;
