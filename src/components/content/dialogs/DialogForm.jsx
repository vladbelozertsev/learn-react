import { yupResolver } from "@hookform/resolvers";
import PT from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { addMsg } from "../../../store/dialogs-slice";
import styles from "./DialogForm.module.css";

const schema = yup.object().shape({
  msgInp: yup
    .string()
    .required("Обязательное поле")
    .min(3, "Не менее 3-х символов")
    .max(20, "Не более 20-и символов"),
});

const DialogForm = (props) => {
  const { id, index } = props;
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const sendForm = ({ msgInp }) => {
    const msg = { id: index + 1, text: msgInp };
    dispatch(addMsg({ id, msg }));
  };

  return (
    <form onSubmit={handleSubmit(sendForm)} className={styles["dialog-form"]}>
      <div>
        <input ref={register} name="msgInp" type="text" />
        {errors.msgInp && errors.msgInp.message}
      </div>
      <input type="submit" value="Отправить" />
    </form>
  );
};

DialogForm.propTypes = {
  id: PT.number.isRequired,
  index: PT.number.isRequired,
};

export default DialogForm;

// Дополнительно:
// https://codesandbox.io/s/react-hook-form-v6-superstructresolver-ed67i?file=/src/App.js
// https://github.com/jquense/yup/issues/211
// https://github.com/react-hook-form/react-hook-form/issues/330

// const DialogInput = () => {
//   const { register, errors, handleSubmit } = useForm();
//   const msgValid = (val) => {
//     return val.length < 9 || "max length is 9";
//   };
//   const sendForm = (form) => {
//     console.log(form);
//   };
//   return (
//     <Form onSubmit={handleSubmit(sendForm)}>
//       <div>
//         <input
//           ref={register({
//             required: "the filed is required",
//             minLength: { value: 6, message: "min length is 6" },
//             validate: msgValid,
//           })}
//           name="msg"
//           type="text"
//         />
//         {errors.msg && errors.msg.message}
//       </div>
//       <input type="submit" value="Отправить" />
//     </Form>
//   );
// };

//================================================================
// yup.reach:

// let schema = yup.object().shape({
//   nested: yup.object().shape({
//     arr: yup.array().of(yup.object().shape({ num: yup.number().max(4) })),
//   }),
// });

// let value = 3; // 5

// // Достигаем тип валидации в nested.arr.num и валидируем в соотв. с данным типом value
// yup
//   .reach(schema, "nested.arr.num")
//   .validate(value)
//   .then((result) => {
//     console.log("resolve - ", result);
//   })
//   .catch((err) => {
//     // Если убрать catch то ошибка будет выведена на экране
//     // ошибка только в консоли:
//     console.log("error - ", err);
//   });

//================================================================
// yup.addMethod:

// yup.addMethod(yup.number, "moreThan", function (limit, myErrorMsg) {
//   return this.test("moreThanTest", myErrorMsg, function (value) {
//     const { path, createError } = this;
//     return value < limit || createError({ path, myErrorMsg });
//   });
// });

// const schema = yup.object().shape({
//   msg: yup
//     .number()
//     .typeError("Вы должны ввести число!")
//     .transform((cv, ov) => (typeof ov === "string" && ov.trim() === "" ? undefined : cv))
//     .required("Обязательное поле")
//     .min(10, "Введите число не меньше 10")
//     .moreThan(100000, "Мое сообщение об ошибке YYY"),
// });
