import PropTypes from "prop-types";
import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
  const { name } = props;

  return (
    <div className={styles["user-info"]}>
      <div>Имя: {name}</div>
      <div>Страна: {"user.locations.country"}</div>
      <div>Город: {"user.locations.city"}</div>
    </div>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserInfo;
