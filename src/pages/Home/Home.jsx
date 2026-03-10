import css from "./Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Store personal contacts securely. Register or log in to manage your own
        private list.
      </p>
    </section>
  );
};

export default Home;
