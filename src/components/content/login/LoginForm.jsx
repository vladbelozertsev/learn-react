import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../store/init-slice";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const loginValidate = (val) => val.length < 25 || "max length is 25";

  const emailDemand = {
    required: "the filed is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "invalid email address",
    },
  };

  const passDemand = {
    required: "the filed is required",
    minLength: { value: 6, message: "min length is 6" },
    validate: loginValidate,
  };

  const successSubm = (form, e) => {
    dispatch(loginThunk(form));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(successSubm)} className={styles["login-form"]}>
      <h2>Войти: </h2>
      <div className={styles["login-form__div"]}>
        <input type="text" name="email" ref={register(emailDemand)} />
        <span>{errors.email && errors.email.message}</span>
      </div>
      <div className={styles["login-form__div"]}>
        <input type="password" name="password" ref={register(passDemand)} />
        <span>{errors.password && errors.password.message}</span>
      </div>
      <div>
        <input type="checkbox" name="rememberMe" ref={register()} />
        Запомнить меня
      </div>
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default LoginForm;
