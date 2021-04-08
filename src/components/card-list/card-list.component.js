import React from 'react'
import "./card-list.css";
import {Card} from "../card/card.component";
export const Cardlist = (props) => {
        return (
            <div className="card-list">
                {props.Monsters.map(monster => (
                    <Card key={monster.id} monster={monster}/>
                ))}
            </div>
        )
    
}


