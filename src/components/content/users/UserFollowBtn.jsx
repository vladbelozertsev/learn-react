import PT from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { setSubThunk } from "../../../store/users-slice";
import styles from "./UserFollowBtn.module.css";

const UserFollowBtn = (props) => {
  const { followed, id, subLoad } = props;
  const dispatch = useDispatch();
  const disabled = subLoad.some((userId) => userId === id);
  const sub = () => {
    dispatch(setSubThunk({ id, followed }));
  };

  return (
    <button disabled={disabled} onClick={sub} className={styles["follow-btn"]}>
      {followed ? "Отписаться" : "Подписаться"}
    </button>
  );
};

UserFollowBtn.propTypes = {
  followed: PT.bool.isRequired,
  id: PT.number.isRequired,
  subLoad: PT.array.isRequired,
};

export default UserFollowBtn;
