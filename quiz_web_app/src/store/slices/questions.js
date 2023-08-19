import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setEmail(state, action) {
      return { ...state, email: action.payload.email };
    },
  },
});

export const { setEmail } = questionSlice.actions;

export default questionSlice.reducer;
