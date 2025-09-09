import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InfoBox from "./InfoBox"; // ✅ Import InfoBox

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);  // ✅ New state
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8ebba4b4f69662972ec089a58760757f";

    let getweatherinfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonresponse = await response.json();

            let result = {
                city: jsonresponse.name,
                temp: jsonresponse.main.temp,
                tempmin: jsonresponse.main.temp_min,
                tempmax: jsonresponse.main.temp_max,
                humidity: jsonresponse.weather[0].main,
            };
            setWeatherInfo(result);  // ✅ Store in state
        } catch (err) {
            alert("City not found or API error");
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getweatherinfo(city);
        setCity("");
    };

    return (
        <div>
            <h3>Weather Data</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>

            {/* ✅ Show InfoBox after data is fetched */}
            {weatherInfo && <InfoBox info={weatherInfo} />}
        </div>
    );
}
