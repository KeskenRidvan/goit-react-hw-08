import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const getLinkClass = ({ isActive }) =>
  isActive ? `${css.link} ${css.active}` : css.link;

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
