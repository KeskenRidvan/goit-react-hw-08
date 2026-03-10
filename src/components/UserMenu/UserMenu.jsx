import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.name}>Welcome, {user.name}</p>
      <button className={css.button} onClick={() => dispatch(logOut())} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
