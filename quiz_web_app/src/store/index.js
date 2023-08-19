import { configureStore } from "@reduxjs/toolkit";
import questionSliceReducer from "./slices/questions";

export const store = configureStore({
  reducer: {
    questions: questionSliceReducer,
  },
});
