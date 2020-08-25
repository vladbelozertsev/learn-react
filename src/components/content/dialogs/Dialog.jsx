import PT from "prop-types";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import DialogForm from "./DialogForm";

const Dialog = (props) => {
  const { dialog } = props;
  const id = Number(useRouteMatch().params.id);
  const { msgs, name } = dialog[id];

  return (
    <div>
      <h2>Диалог с {name}</h2>
      {msgs.map((item, i) => (
        <div key={i}>{item.text}</div>
      ))}
      <DialogForm id={id} index={msgs.length} />
    </div>
  );
};

Dialog.propTypes = {
  dialog: PT.array.isRequired,
};

export default Dialog;
