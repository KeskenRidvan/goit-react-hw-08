import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
