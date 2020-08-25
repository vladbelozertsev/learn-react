import PT from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../store/init-slice";
import withLogin from "../_hocs/withLogin";
import styles from "./Header.module.css";

const Header = ({ login }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={styles.container}>
      {login.id ? (
        <div onClick={logout} className={styles.exit}>
          Выйти
        </div>
      ) : (
        <NavLink to={"/login"}>Логин</NavLink>
      )}
    </div>
  );
};

Header.propTypes = {
  login: PT.object.isRequired,
};

export default withLogin(Header);
