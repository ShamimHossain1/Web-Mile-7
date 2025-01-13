import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    // console.log(countries);

    const handlevisitedCountry = country =>{
        // console.log(country);
        
        setVisitedCountry([...visitedCountry, country]);

    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h4>Visited Countries : {visitedCountry.length}</h4>
            <ul>
                {
                    visitedCountry.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }

            </ul>
            <div className="country-container">

                {
                    countries.map((country) => <Country country={country} key={country.cca3} handlevisitedCountry={handlevisitedCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;