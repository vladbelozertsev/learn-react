import { configureStore } from "@reduxjs/toolkit";
import initSliseReducer from "./init-slice";
import dialogsSliseReducer from "./dialogs-slice";
import profileSliseReducer from "./profile-slice";
import usersSliceReducer from "./users-slice";

export default configureStore({
  reducer: {
    init: initSliseReducer,
    dialogs: dialogsSliseReducer,
    profile: profileSliseReducer,
    users: usersSliceReducer,
  },
});
