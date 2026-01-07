import avatar from "../../assets/avatar.png";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      <p className="sidebar__name">Terrence Tegegne</p>
    </div>
  );
}
