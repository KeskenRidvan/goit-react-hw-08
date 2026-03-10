import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(register({ name, email, password })).unwrap();
      setName("");
      setEmail("");
      setPassword("");
    } catch {
      // Error is shown from Redux state.
    }
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={event => setName(event.target.value)}
          required
          type="text"
          value={name}
        />
      </label>

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
        Register
      </button>
      {error && <p className={css.error}>{error}</p>}
    </form>
  );
};

export default RegistrationForm;
