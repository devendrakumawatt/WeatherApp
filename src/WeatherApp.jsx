import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Devendra </h1>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}