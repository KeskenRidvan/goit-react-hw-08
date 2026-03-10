import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
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
        Number
        <input
          className={css.input}
          onChange={event => setNumber(event.target.value)}
          required
          type="tel"
          value={number}
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
