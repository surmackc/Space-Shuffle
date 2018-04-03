import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectSpace(props.spaceName)}>
                <img alt={props.spaceName} src={props.image} />
            </a>
        </div>

        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.spaceName}
                </li>
            </ul>
        </div>
    </div>
);

export default FriendCard;