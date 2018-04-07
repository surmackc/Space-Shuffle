import React from "react";
import "./Nav.css";

const Nav = props => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li><a href="/">Space Click Game</a></li>
      <li>Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
    </ul>
  </div>
);

export default Nav;