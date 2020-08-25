import PT from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

const Link = (props) => {
  const { to } = props;
  const edit = (s) => {
    const sEdit = s.substr(1);
    return sEdit.charAt(0).toUpperCase() + sEdit.slice(1);
  };
  const toCap = edit(to);
  return (
    <NavLink to={to} className={styles["link"]}>
      {toCap}
    </NavLink>
  );
};

Link.propTypes = {
  to: PT.string.isRequired,
};

export default Link;
