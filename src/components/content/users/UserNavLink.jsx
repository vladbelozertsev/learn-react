import PT from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import defaultImg from "../../_assets/images/users/default-ava.png";
import styles from "./UserNavLink.module.css";

const UserNavLink = (props) => {
  const { id, photos } = props;
  const { small } = photos;
  const src = small ? small : defaultImg;

  return (
    <NavLink to={`/profile/${id}`}>
      <img src={src} alt="ava" className={styles["user-link__img"]} />
    </NavLink>
  );
};

UserNavLink.propTypes = {
  id: PT.number.isRequired,
  photos: PT.object.isRequired,
};

export default UserNavLink;
