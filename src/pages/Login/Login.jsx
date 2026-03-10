import LoginForm from "../../components/LoginForm";
import css from "./Login.module.css";

const Login = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Log In</h1>
      <LoginForm />
    </section>
  );
};

export default Login;
