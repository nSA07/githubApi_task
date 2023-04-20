import { configureStore } from "@reduxjs/toolkit";
import issuesSlice from "../feature/issuesSlice";
import dataSlice from "../feature/dataSlice";

export const store = configureStore({
  reducer: {
    issue: issuesSlice,
    data: dataSlice,
  },
})