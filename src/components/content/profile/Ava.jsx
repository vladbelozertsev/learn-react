import React from "react";
import degaultAva from "../../_assets/images/profile/default-ava.png";
import PT from "prop-types";
import styles from "./Ava.module.css";

const Ava = ({ profile }) => {
  const { load, data } = profile;
  let src;

  if (!load) {
    src = data.photos.large ? data.photos.large : degaultAva;
  }

  return load ? (
    <div>Loading...</div>
  ) : (
    <div className={styles["ava"]}>
      <img src={src} alt="img" />
    </div>
  );
};

Ava.propTypes = {
  profile: PT.object.isRequired,
};

export default Ava;
