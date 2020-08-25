import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

const initialState = {
  posts: [
    { id: 0, message: "hello" },
    { id: 1, message: "yoyoyoyoyo" },
    { id: 2, message: "its my first react props!!!" },
  ],
  profile: { load: false, id: null, data: null },
  status: { load: false, data: null },
};

const profileSlice = createSlice({
  name: "profile", // prefix redux-ducks style
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    setUserProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creaters:
export const { addPost, setUserProfile, setStatus } = profileSlice.actions;

// Selectors (ex mstp):
export const getProfile = (state) => state.profile;

// Thunks:
// * data = response.data (from axios)
export const setProfileThunk = (id) => async (dispatch) => {
  dispatch(setUserProfile({ load: true, id }));
  const data = await API.profileAPI.getProfile(id);
  dispatch(setUserProfile({ load: false, data }));
};

export const getStatusThunk = (id) => async (dispatch) => {
  dispatch(setStatus({ load: true }));
  const data = await API.profileAPI.getStatus(id);
  dispatch(setStatus({ load: false, data }));
};

export const setStatusThunk = (status) => async (dispatch) => {
  dispatch(setStatus({ load: true }));
  const data = await API.profileAPI.setStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus({ load: false, data: status }));
  }
};

export default profileSlice.reducer;
