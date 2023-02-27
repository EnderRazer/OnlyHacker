import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: "logs",
  initialState: {
    value: {
      logs: [
        {
          name: "@TestName",
          type: "user",
          dt: "2023-02-22 19:45:25",
          message: "Testing short message",
          allowed: true,
        },
        {
            name: "@TestName",
            type: "user",
            dt: "2022-02-22 19:55:25",
            message: "Testing short message",
            allowed: true,
          },
          {
            name: "@TestName",
            type: "user",
            dt: "2023-01-22 12:45:25",
            message: "Testing short message",
            allowed: true,
          },
        {
          name: "@TestLooooooongName",
          type: "chat",
          dt: "2023-02-26 12:45:25",
          message:
            "Testing very very very very very very very not short message from this user with nickname consist of a lot of different symbols!",
          allowed: true,
        },
        {
          name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
          type: "chat",
          dt: "2023-02-26 12:40:25",
          message:
            "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
          allowed: true,
        },
        {
          name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
          type: "chat",
          dt: "2023-02-26 12:25:25",
          message:
            "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
          allowed: true,
        },
        {
            name: "@ANOTHERLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONGTestLooooooongName",
            type: "chat",
            dt: "2023-12-26 12:25:25",
            message:
              "Testing very very very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very veryvery very very very very very not short message from this user with nickname consist of a lot of different symbols!",
            allowed: true,
          },
      ],
    },
  },
  reducers: {
    log: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = logSlice.actions;

export default logSlice.reducer;
