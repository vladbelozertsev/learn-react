import PT from "prop-types";
import React from "react";
import styles from "./User.module.css";
import UserFollowBtn from "./UserFollowBtn";
import UserInfo from "./UserInfo";
import UserNavLink from "./UserNavLink";

const User = ({ auth, subLoad, users }) =>
  users.map(({ id, photos, name, followed }) => (
    <div key={id} className={styles["user"]}>
      <div>
        <UserNavLink id={id} photos={photos} />
        {auth ? <UserFollowBtn followed={followed} id={id} subLoad={subLoad} /> : null}
      </div>
      <UserInfo name={name} />
    </div>
  ));

User.propTypes = {
  auth: PT.bool.isRequired,
  subLoad: PT.array.isRequired,
  users: PT.array.isRequired,
};

export default React.memo(User);
