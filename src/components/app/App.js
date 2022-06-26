import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameStart from "../gameStart/GameStart";
import Game from "../game/Game";
import GameOver from "../gameOver/GameOver";
import ErrorPage from "../ErrorPage/ErrorPage";

import questions from "./../../questions.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      winPrize: "$0",
    };
  }

  setwinPrize = (win = "$0") => {
    this.setState({
      winPrize: win,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameStart />} />
            <Route
              path="/game"
              element={
                <Game questions={questions} setwinPrize={this.setwinPrize} />
              }
            />
            <Route
              path="/game-over"
              element={
                <GameOver
                  winPrize={this.state.winPrize}
                  setwinPrize={this.setwinPrize}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
