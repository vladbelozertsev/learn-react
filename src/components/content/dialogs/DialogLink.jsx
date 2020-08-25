import PT from "prop-types";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./DialogLink.module.css";

const DialogLink = ({ id, name }) => {
  const match = useRouteMatch();
  const sasdas = ["asas", 555];
  console.log(sasdas);

  return (
    <div className={styles["dialog-link"]}>
      <NavLink to={`${match.url}/${id}`} className={styles["dialog-link__link"]}>
        {name}
      </NavLink>
    </div>
  );
};

DialogLink.propTypes = {
  id: PT.number.isRequired,
  name: PT.string.isRequired,
};

export default DialogLink;
