import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    activeTab: "",
  };
  handleRoute = (e) => {
    this.setState({ activeTab: e.target.innerText });
  };
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
          <Link
            className={
              "button" + (this.state.activeTab === "Home" ? " active" : "")
            }
            to="/"
            onClick={this.handleRoute}
          >
            <p>Home</p>
          </Link>
          <Link
            className={
              "button" + (this.state.activeTab === "Dashboard" ? " active" : "")
            }
            to="/Dashboard"
            onClick={this.handleRoute}
          >
            <p>Dashboard</p>
          </Link>
          <Link
            className={
              "button" + (this.state.activeTab === "Logs" ? " active" : "")
            }
            to="/Logs"
            onClick={this.handleRoute}
          >
            <p>Logs</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
