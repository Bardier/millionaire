import "./Game.css";

import React, { Component, createRef } from "react";
import { Navigate } from "react-router-dom";
import Burger from "./../burger/Burger";

class Game extends Component {
  constructor({ questions, setwinPrize }) {
    super();
    this.questions = questions;
    this.setwinPrize = setwinPrize;
    this.state = {
      question: "",
      answers: [],
      corectAnswer: "",

      shouldRedirect: false,
    };

    this.countListRef = createRef();

    this.checkingAnswer = false;
    this.numberOfCheckedQuestions = 0;
  }

  componentDidMount() {
    this.setState({
      question: this.questions[this.numberOfCheckedQuestions].question,
      answers: this.questions[this.numberOfCheckedQuestions].answers,
      corectAnswer: this.questions[this.numberOfCheckedQuestions].answers[0],
    });
  }

  checkAnswer = ({ target }) => {
    if (this.checkingAnswer) return;

    this.checkingAnswer = true;

    target.classList.add("answers__item--selected");

    const userAnswer = target.textContent.slice(1);

    setTimeout(() => {
      target.classList.remove("answers__item--selected");
      if (userAnswer === this.state.corectAnswer) {
        target.classList.add("answers__item--correct");
        setTimeout(() => {
          this.nextQuestion();
        }, 1000);
      } else {
        target.classList.add("answers__item--wrong");
        setTimeout(() => {
          this.setState({
            shouldRedirect: true,
          });
        }, 2000);
      }
    }, 1000);
  };

  nextQuestion = () => {
    this.setwinPrize(
      this.countListRef.current.children[this.numberOfCheckedQuestions]
        .textContent
    );

    this.numberOfCheckedQuestions++;

    if (this.numberOfCheckedQuestions === 12) {
      this.setState({
        shouldRedirect: true,
      });
    } else {
      [...this.countListRef.current.children].forEach((el) => {
        el.classList.remove("count__item--active");
      });

      this.countListRef.current.children[
        this.numberOfCheckedQuestions
      ].classList.add("count__item--active");

      this.countListRef.current.children[
        this.numberOfCheckedQuestions - 1
      ].classList.add("count__item--passed");

      document.querySelectorAll(".answers__item").forEach((el) => {
        el.classList.remove("answers__item--correct");
      });
      this.checkingAnswer = false;

      this.setState({
        question: this.questions[this.numberOfCheckedQuestions].question,
        answers: this.questions[this.numberOfCheckedQuestions].answers,
        corectAnswer: this.questions[this.numberOfCheckedQuestions].answers[0],
      });
    }
  };

  render() {
    const mixedAnswersList = [...this.state.answers];
    mixedAnswersList.sort(() => Math.random() - 0.5);

    return (
      <div className="game">
        {this.state.shouldRedirect && <Navigate replace to="/game-over" />}
        <div className="container">
          <Burger />
          <div className="game__content">
            <h2 className="game__question">{this.state.question}</h2>
            <div className="game__answers answers">
              <ul className="answers__list">
                <li className="answers__item" onClick={this.checkAnswer}>
                  <span>A</span>
                  {mixedAnswersList[0]}
                </li>
                <li className="answers__item" onClick={this.checkAnswer}>
                  <span>B</span>
                  {mixedAnswersList[1]}
                </li>
                <li className="answers__item" onClick={this.checkAnswer}>
                  <span>C</span>
                  {mixedAnswersList[2]}
                </li>
                <li className="answers__item" onClick={this.checkAnswer}>
                  <span>D</span>
                  {mixedAnswersList[3]}
                </li>
              </ul>
            </div>
            <div className="game__count count">
              <ul className="count__list" ref={this.countListRef}>
                <li className="count__item count__item--active">$500</li>
                <li className="count__item">$1,000</li>
                <li className="count__item">$2,000</li>
                <li className="count__item">$4,000</li>
                <li className="count__item">$8,000</li>
                <li className="count__item">$16,000</li>
                <li className="count__item">$32,000</li>
                <li className="count__item">$64,000</li>
                <li className="count__item">$125,000</li>
                <li className="count__item">$250,000</li>
                <li className="count__item">$500,000</li>
                <li className="count__item">$1,000,000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
