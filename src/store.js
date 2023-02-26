import { configureStore } from "@reduxjs/toolkit";

import logSlice from "./logSlice";

const store = configureStore({
  reducer: {
    logSlice,
  },
});

export default store;
