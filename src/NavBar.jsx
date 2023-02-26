import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-title-container">
          <img
            src="./pics/logo.webp"
            alt="Logo"
            style={{ height: "100px", width: "100px" }}
          />
          <h1>OnlyHacker</h1>
        </div>
        <div className="navbar-button-container">
          <Link className="button" to="/">
            {" "}
            <p>Home</p>{" "}
          </Link>
          <Link className="button" to="/Dashboard">
            {" "}
            <p>Dashboard</p>{" "}
          </Link>
          <Link className="button" to="/Logs">
            {" "}
            <p>Logs</p>{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
