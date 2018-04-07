
import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCharacter(props.type)}>
                <img alt={props.type} src={props.image} />
            </a>
        </div>
    </div>
);

export default CharacterCard;