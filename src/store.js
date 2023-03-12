import { configureStore } from "@reduxjs/toolkit";

import logs from "./logSlice";

const store = configureStore({
  reducer: {
    logs,
  },
});

export default store;
