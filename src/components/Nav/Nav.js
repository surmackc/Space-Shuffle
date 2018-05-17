import React from "react";
import "./Nav.css";

const Nav = props => (
  <div>
    <ul className="nav nav-pills nav-justified">
      <li><a href="https://surmackc.github.io/Space-Shuffle/">Start</a></li>
      <li>Score: <span style={{color: "yellow"}}>{props.curScore}</span> | Top Score: <span style={{color: "pink"}}>{props.topScore}</span>
      </li>
    </ul>
  </div>
);

export default Nav;
