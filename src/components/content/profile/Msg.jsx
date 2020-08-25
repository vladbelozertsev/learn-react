import { yupResolver } from "@hookform/resolvers";
import PT from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addPost } from "../../../store/profile-slice";
import styles from "./Msg.module.css";

const schema = yup.object().shape({
  postInp: yup
    .string()
    .required("Обязательное поле")
    .min(3, "Не менее 3-х символов")
    .max(20, "Не более 20-и символов"),
});

const Msg = (props) => {
  const { postId } = props;
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = ({ postInp }) => {
    dispatch(addPost({ id: postId, message: postInp }));
  };

  return (
    <form onSubmit={handleSubmit(sendForm)} className={styles["msg"]}>
      <input type="text" placeholder={"Введите текст"} name="postInp" ref={register} />
      {errors.msg && errors.msg.message}
      <input type="submit" />
    </form>
  );
};

Msg.propTypes = {
  postId: PT.number.isRequired,
};

export default Msg;
