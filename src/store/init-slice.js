import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

const initialState = {
  isInit: false,
  login: {
    id: null,
    login: null,
    email: null,
  },
};

const initSlise = createSlice({
  name: "init",
  initialState,
  reducers: {
    setInit: (state) => {
      state.isInit = true;
    },
    setLogin: (state, action) => {
      const empty = Object.entries(action.payload).length === 0;
      state.serverErr = initialState.serverErr;
      state.login = empty ? initialState.login : action.payload;
    },
    setServerErr: (state, action) => {
      state.serverErr.error = true;
      state.serverErr.data = action.payload;
    },
  },
});

// Action creators
export const { setInit, setLogin, setServerErr } = initSlise.actions;

// Selectors (ex mstp):
export const getIsInit = (state) => state.init.isInit;
export const getLogin = (state) => state.init.login;
export const getServerErr = (state) => state.init.serverErr;

// Thunks:
export const aboutMe = (withInit = false) => async (dispatch) => {
  const response = await API.authAPI.aboutMe();
  dispatch(setLogin(response.data));
  if (withInit) {
    dispatch(setInit());
  }
};

export const loginThunk = (form) => async (dispatch) => {
  const data = await API.authAPI.login(form);
  if (data.resultCode === 0) {
    dispatch(aboutMe());
  }
};

export const logoutThunk = () => async (dispatch) => {
  const data = await API.authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(aboutMe());
  }
};

export default initSlise.reducer;
