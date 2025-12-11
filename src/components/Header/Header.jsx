import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

<<<<<<< HEAD
function Header({ handleAddClick }) {
=======
function Header() {
>>>>>>> origin/master
  return (
    <header className="header">
      <div className="header__logo-container">
        <img className="header__logo" src={logo} />
        <p className="header__date-and-location">DATE, LOCATION</p>
      </div>

      <div className="header__user-container">
        <div className="header__user-text">
<<<<<<< HEAD
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn">
            + Add clothes
          </button>
=======
          <button className="header__add-clothes-btn">+ Add clothes</button>
>>>>>>> origin/master
          <p className="header__username">Terrence Tegegne</p>
        </div>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
