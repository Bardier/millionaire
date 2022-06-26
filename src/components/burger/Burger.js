import "./Burger.css";

import { Component } from "react";

class Burger extends Component {
  changeBurgerBtn = () => {
    const allLines = document.querySelectorAll(".menu-btn__line");
    const prizeWindow = document.querySelector(".game__count ");

    if (window.getComputedStyle(prizeWindow).display === "flex") {
      prizeWindow.classList.remove("df");
      prizeWindow.classList.add("dn");
    } else {
      prizeWindow.classList.add("df");
      prizeWindow.classList.remove("dn");
    }

    allLines.forEach((el) => {
      el.classList.toggle("menu-btn__line--open");
    });
  };

  render() {
    return (
      <button
        className="menu-btn"
        type="button"
        onClick={() => {
          this.changeBurgerBtn();
        }}
      >
        Открытие меню
        <span className="menu-btn__line"></span>
        <span className="menu-btn__line"></span>
        <span className="menu-btn__line"></span>
        <span className="menu-btn__line"></span>
      </button>
    );
  }
}

export default Burger;
