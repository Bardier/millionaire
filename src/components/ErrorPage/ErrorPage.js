import "./ErrorPage.css";

import { Component } from "react";
import { Link } from "react-router-dom";
import errorImg from "./../../resources/img/404.gif";

class ErrorPage extends Component {
  render() {
    return (
      <Link to={"/"} className="error-link">
        Error 404
        <div className="container">
          <img src={errorImg} alt="Error 404" className="error-img" />
        </div>
      </Link>
    );
  }
}

export default ErrorPage;
