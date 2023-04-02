import { configureStore } from "@reduxjs/toolkit";
import { logsApi } from "./logsApi";

import logs from "./logSlice";

const store = configureStore({
  reducer: {
    logs,
    [logsApi.reducerPath]: logsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logsApi.middleware),
});

export default store;
