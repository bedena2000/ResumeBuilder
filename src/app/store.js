import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "../features/resumeSlice";

export default configureStore({
  reducer: {
    resume: resumeSlice,
  },
});
