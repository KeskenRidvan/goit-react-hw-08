import RegistrationForm from "../../components/RegistrationForm";
import css from "./Registration.module.css";

const Registration = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Register</h1>
      <RegistrationForm />
    </section>
  );
};

export default Registration;
