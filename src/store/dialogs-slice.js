import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialogWith: [
    {
      id: 0,
      name: "Саша",
      msgs: [
        { id: 0, text: "Hi" },
        { id: 1, text: "How are you Sasha?" },
        { id: 2, text: "I'm ok!" },
      ],
    },
    {
      id: 1,
      name: "Вася",
      msgs: [
        { id: 0, text: "Hi" },
        { id: 1, text: "How are you Vasya?" },
        { id: 2, text: "I'm ok!" },
      ],
    },
    {
      id: 2,
      name: "Катя",
      msgs: [
        { id: 0, text: "Hi" },
        { id: 1, text: "How are you Katya?" },
        { id: 2, text: "I'm ok!" },
      ],
    },
  ],
};

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    addMsg: (state, action) => {
      const id = action.payload.id;
      state.dialogWith[id].msgs.push(action.payload.msg);
    },
  },
});

// Action creators
export const { addMsg } = dialogsSlice.actions;

// Selectors:
export const getDialogWith = (state) => state.dialogs.dialogWith;

export default dialogsSlice.reducer;
