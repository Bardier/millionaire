import "./GameOver.css";

import { Component } from "react";
import { Link } from "react-router-dom";
import Hand from "./../hand/Hand";

class GameOver extends Component {
  constructor({ winPrize, setwinPrize }) {
    super();
    this.winPrize = winPrize;
    this.setwinPrize = setwinPrize;
  }

  render() {
    return (
      <div className="game-over">
        <div className="container">
          <Hand />
          <div className="game-over__content">
            <p className="game-over__title">Total score:</p>
            <p className="game-over__prize">{this.winPrize} earned</p>
            <Link
              to={"/game"}
              className="btn"
              onClick={() => this.setwinPrize()}
            >
              Try again
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
