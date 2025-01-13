import { useState } from 'react';
import './Country.css'
const Country = ({ country,handlevisitedCountry }) => {

    const { name, flags,population,area, cca3 } = country;
    const [Visited, setVisited] = useState(false);

    function handleVisited(){
        setVisited(!Visited);
        handlevisitedCountry(country);
    }


    return (
        <div  className={`country ${Visited? 'visited' : 'not-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="flag" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited &&" I have visited This country"}

        </div>
    );
};

export default Country;