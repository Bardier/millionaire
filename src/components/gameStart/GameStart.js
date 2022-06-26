import "./GameStart.css";
import Hand from "../hand/Hand";

import { Component } from "react";
import { Link } from "react-router-dom";

class GameStart extends Component {
  render() {
    return (
      <div className="game-start">
        <div className="container">
          <Hand />
          <div className="game-start__wrapper">
            <h1 className="game-start__title">
              Who wants to be a millionaire?
            </h1>
            <Link to={"./game"} className="btn">
              Start
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameStart;
