import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import css from "./Contacts.module.css";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={css.section}>
      <h1 className={css.title}>Contacts</h1>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Request failed: {error}</p>}
      <ContactList />
    </section>
  );
};

export default Contacts;
