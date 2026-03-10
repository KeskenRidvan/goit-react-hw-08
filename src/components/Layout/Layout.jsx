import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
