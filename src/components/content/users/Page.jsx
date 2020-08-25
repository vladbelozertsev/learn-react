import PT from "prop-types";
import React from "react";
import styles from "./Page.module.css";
import { setUsersThunk } from "../../../store/users-slice";
import { useDispatch } from "react-redux";
import classNames from "classnames";

const Page = ({ pageActive, val, pageSize }) => {
  const dispatch = useDispatch();

  const fetchUsers = () => {
    dispatch(setUsersThunk(val, pageSize));
  };

  return (
    <span className={styles["page"]}>
      <span
        onClick={fetchUsers}
        className={classNames({
          [styles["page__span"]]: true,
          [styles["page__span_active"]]: pageActive === val,
        })}
      >
        {val}
      </span>{" "}
    </span>
  );
};

Page.propTypes = {
  pageActive: PT.number.isRequired,
  val: PT.number.isRequired,
  pageSize: PT.number.isRequired,
};

export default Page;
