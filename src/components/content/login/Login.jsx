import PT from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import withLogin from "../../_hocs/withLogin";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm.jsx";

const Login = ({ login }) => {
  if (login.id) {
    return <NavLink to={"/"} />;
  }

  return (
    <div className={styles["login"]}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

Login.propTypes = {
  login: PT.object.isRequired,
};

export default withLogin(Login);
