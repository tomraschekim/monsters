import React from 'react';
import "./card.css";
export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={'https://robohash.org/${props.monster.id}.DTK.png?set=set2&size=180x180'}/>
            <h1>{props.monster.name}</h1>
        </div>
    )
}

