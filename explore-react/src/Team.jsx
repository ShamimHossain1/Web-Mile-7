import { useState } from "react";

export default function Team() {

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px'

    }

    function handleAdd() {
        setTeam(team + 1);
    }
    function handleRemove() {
        team > 0 && setTeam(team - 1);
    }
    return (
        <div style={teamStyle}>
            <h1 className="team__title">Our Team Players:{team} </h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}