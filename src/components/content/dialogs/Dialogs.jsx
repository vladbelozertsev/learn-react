import React from "react";
import { useSelector } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import { getDialogWith } from "../../../store/dialogs-slice";
import Dialog from "./Dialog";
import DialogLink from "./DialogLink";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  const dialogWith = useSelector(getDialogWith);
  const match = useRouteMatch();

  // https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5
  return (
    <div className={styles["dialogs"]}>
      <h1>Диалоги</h1>
      <div>Перейти к диалогу с:</div>

      {dialogWith.map((item) => (
        <DialogLink key={item.id} id={item.id} name={item.name} />
      ))}

      <Route path={`${match.url}/:id`}>
        <Dialog dialog={dialogWith.map((item) => ({ msgs: item.msgs, name: item.name }))} />
      </Route>
    </div>
  );
};

export default Dialogs;
