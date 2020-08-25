import PT from "prop-types";
import React, { useState } from "react";
import styles from "./Status.module.css";
import StatusForm from "./StatusForm";

const Status = ({ status, login }) => {
  const [editMode, setEditMode] = useState(false);
  const defaultStatus = status.data ? status.data : "Без статуса (null)";
  const setEditModeOn = () => {
    setEditMode(true);
  };

  return status.load ? (
    <div>Loading...</div>
  ) : (
    <div className={styles["status"]}>
      Статус:
      {editMode ? (
        <StatusForm setEditMode={setEditMode} status={defaultStatus} />
      ) : (
        // Если НЕ залогинен, запрещено корректировать чужой статус:
        <span onDoubleClick={login ? setEditModeOn : null}>{defaultStatus}</span>
      )}
    </div>
  );
};

Status.propTypes = {
  status: PT.object.isRequired,
  login: PT.bool.isRequired,
};

export default Status;

// можно переопределить mode/reValidateMode для отдельного Controller компонента:
// НЕ работает для обычных компонентов (без Contoroller обертки)
// const customControl = {
//   ...control,
//   mode: { isOnBlur: false, isOnChange: true, isObSubmit: false },
//   reValidateMode: { isReValidateOnBlur: false, isReValidateOnSubmit: false },
// };
