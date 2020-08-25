import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

const initialState = {
  load: false,
  pageActive: 1,
  pageSize: 10,
  subLoad: [555, 1234],
  users: [],
  usersSumm: 0,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSub: (state, action) => {
      state.users.find((user) => user.id === action.payload.id).followed = action.payload.followed;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
      state.usersSumm = action.payload.usersSumm;
      state.pageActive = action.payload.pageActive;
    },
    setLoad: (state, action) => {
      state.load = action.payload;
    },
    setSubLoad: (state, action) => {
      if (state.subLoad.find((existId) => Number(existId) === Number(action.payload))) {
        state.subLoad = state.subLoad.filter((existId) => existId !== action.payload);
      } else {
        state.subLoad.push(action.payload);
      }
    },
  },
});

// Action creators:
export const { setSub, setUsers, setPageActive, setUsersSumm, setLoad, setSubLoad } = usersSlice.actions;

// Selectors (ex mstp):
export const getUsers = (state) => state.users;

// Thunks:
export const setSubThunk = ({ id, followed }) => async (dispatch) => {
  dispatch(setSubLoad(id));
  const need = followed ? "unsubscribe" : "subscribe";
  const response = await API.followAPI[need](id);
  if (response.resultCode === 0) {
    dispatch(setSub({ id, followed: !followed }));
    dispatch(setSubLoad(id));
  }
};

export const setUsersThunk = (pageActive, pageSize) => async (dispatch) => {
  dispatch(setLoad(true));
  const data = await API.usersAPI.fetchUsers(pageActive, pageSize);
  const payload = {
    pageActive,
    users: data.items,
    usersSumm: data.totalCount,
  };
  dispatch(setUsers(payload));
  dispatch(setLoad(false));
};

export default usersSlice.reducer;

// Примечания к setUsersThunk:
// общее кол-во пользователей разбивается так: pages = usersSumm / pageSize
// затем берется страница № pageNr, к примеру если pages === 500, и pageNr === 500
// то мы получим первую страницу с пользователем dimych (id === 2). Ссылка для теста:
// https://social-network.samuraijs.com/api/1.0/users?page=1140&count=5
