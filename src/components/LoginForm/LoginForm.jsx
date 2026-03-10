import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(logIn({ email, password })).unwrap();
      setEmail("");
      setPassword("");
    } catch {
      // Error is shown from Redux state.
    }
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          onChange={event => setEmail(event.target.value)}
          required
          type="email"
          value={email}
        />
      </label>

      <label className={css.label}>
        Password
        <input
          className={css.input}
          minLength="7"
          onChange={event => setPassword(event.target.value)}
          required
          type="password"
          value={password}
        />
      </label>

      <button className={css.button} type="submit">
        Log In
      </button>
      {error && <p className={css.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
