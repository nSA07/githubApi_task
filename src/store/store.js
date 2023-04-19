import { configureStore } from "@reduxjs/toolkit";
import issuesSlice from "../feature/issuesSlice";

export const store = configureStore({
  reducer: {
    issue: issuesSlice,
  },
})