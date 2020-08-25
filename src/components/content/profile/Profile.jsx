import PT from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getProfile, getStatusThunk, setProfileThunk } from "../../../store/profile-slice";
import withLogin from "../../_hocs/withLogin";
import Ava from "./Ava";
import Msg from "./Msg";
import Posts from "./Posts";
import styles from "./Profile.module.css";
import Status from "./Status";

const Profile = ({ login }) => {
  const { profile, posts, status } = useSelector(getProfile);
  const dispatch = useDispatch();
  const userId = Number(useRouteMatch().params.userId);
  const myId = login.id;
  const id = userId ? userId : myId; // может быть два id, поэтому сначала userId

  if (id !== profile.id && id) {
    dispatch(setProfileThunk(id));
    dispatch(getStatusThunk(id));
  }

  if (!id) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className={styles["profile"]}>
      <Ava profile={profile} />
      <Status status={status} login={Boolean(login.id)} />
      <Posts posts={posts} />
      <Msg postId={posts.length + 1} />
    </div>
  );
};

Profile.propTypes = {
  login: PT.object.isRequired,
};

export default withLogin(Profile);
