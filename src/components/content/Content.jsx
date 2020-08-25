import React from "react";
import { Route } from "react-router-dom";
import styles from "./Content.module.css";
import Dialogs from "./dialogs/Dialogs";
import Login from "./login/Login";
import Music from "./music/Music";
import Navbar from "./navbar/Navbar";
import News from "./news/News";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
import Users from "./users/Users";

const Content = () => {
  return (
    <div className={styles["content"]}>
      <Navbar />
      <Route path="/login" component={Login} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/music" component={Music} />
      <Route path="/news" component={News} />
      <Route path="/profile/:userId?" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/users" component={Users} />
    </div>
  );
};

export default Content;
