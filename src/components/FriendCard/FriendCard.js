import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Location:</strong> {props.location}
                </li>
                <li>
                    <strong>Occupation:</strong> {props.occupation}
                </li>
            </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
        x
        </span>
    </div>
);

export default FriendCard;