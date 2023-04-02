import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "logs",
  initialState: {
    value: [
      {
        name: "@TestName",
        type: "asd",
        dt: "2023-01-23 12:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "asd",
        dt: "2022-02-23 12:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "asd",
        dt: "2024-02-23 12:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "asd",
        dt: "2023-02-23 12:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "sdas",
        dt: "2023-03-22 12:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "sdas",
        dt: "1023-03-22 12:22:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "sdas",
        dt: "2013-04-22 12:41:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "sdas",
        dt: "2053-02-22 16:42:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "sdas",
        dt: "2013-02-22 12:12:25",
        message: "Testing short",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "user",
        dt: "2023-01-02 09:45:25",
        message: "Testing short message",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "user",
        dt: "2022-02-19 19:05:25",
        message: "Testing short message",
        allowed: true,
      },
      {
        name: "@TestName",
        type: "user",
        dt: "2023-01-22 12:42:25",
        message: "Testing short message",
        allowed: true,
      },
      {
        name: "@TestLooooooongName",
        type: "chat",
        dt: "2023-02-26 12:45:05",
        message:
          "Testing very very very very very very very not short message from this user with nickname consist of a lot of different symbols!",
        allowed: true,
      },
      {
        name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
        type: "chat",
        dt: "2023-02-26 12:40:15",
        message:
          "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
        allowed: true,
      },
      {
        name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
        type: "chat",
        dt: "2023-02-26 12:25:35",
        message:
          "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
        allowed: true,
      },
      {
        name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
        type: "chat",
        dt: "2023-12-26 12:25:45",
        message:
          "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
        allowed: true,
      },
    ],
  },
  reducers: {
    log: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { log } = logSlice.actions;

export default logSlice.reducer;
