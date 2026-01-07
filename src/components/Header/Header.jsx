import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <NavLink className="header__navlink" to="/">
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="WTWR" />
          <p className="header__date-and-location">
            {currentDate}, {weatherData.city}
          </p>
        </div>
      </NavLink>
      <div className="header__user-container">
        <div className="header__user-text">
          <ToggleSwitch />
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <NavLink className="header__navlink" to="/profile">
            <p className="header__username">Terrence Tegegne</p>
          </NavLink>
        </div>
        <NavLink className="header__navlink" to="/profile">
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
