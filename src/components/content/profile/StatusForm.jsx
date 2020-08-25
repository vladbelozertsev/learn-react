import PT from "prop-types";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setStatusThunk } from "../../../store/profile-slice";
import styles from "./StatusForm.module.css";

const Form = ({ setEditMode, status }) => {
  const dispatch = useDispatch();
  const submitStatusBtn = useRef(null);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleSuccessSubmit = (form) => {
    dispatch(setStatusThunk(form.statusInp));
    setEditMode(false);
  };

  const handleBlur = () => {
    submitStatusBtn.current.click();
  };

  return (
    <form onSubmit={handleSubmit(handleSuccessSubmit)}>
      <input
        autoFocus={true}
        defaultValue={status}
        name="statusInp"
        onBlur={handleBlur}
        ref={register}
      />
      {errors.statusInp && <span className={`errorInp`}>{errors.statusInp.message}</span>}
      <input ref={submitStatusBtn} type="submit" className={styles.submitBtn} />
    </form>
  );
};

Form.propTypes = {
  setEditMode: PT.func.isRequired,
  status: PT.string.isRequired,
};

export default Form;
