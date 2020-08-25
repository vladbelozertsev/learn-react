import PT from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUsersThunk } from "../../../store/users-slice";
import withLogin from "../../_hocs/withLogin";
import Pages from "./Pages";
import User from "./User";
import styles from "./Users.module.css";

const Users = ({ login }) => {
  const { load, pageActive, pageSize, subLoad, users, usersSumm } = useSelector(getUsers);
  const dispatch = useDispatch();
  const pagesProps = { usersSumm, pageActive, pageSize };
  const userProps = { users, subLoad, auth: Boolean(login.id) };

  if (users.length === 0) {
    dispatch(setUsersThunk(pageActive, pageSize));
  }

  // if (!login.auth) {
  //   return <Redirect to={"/"} />;
  // }

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["users"]}>
      <Pages {...pagesProps} />
      <User {...userProps} />
    </div>
  );
};

Users.propTypes = {
  login: PT.object.isRequired,
};

export default withLogin(Users);
