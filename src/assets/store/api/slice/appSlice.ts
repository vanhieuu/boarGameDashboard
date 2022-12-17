import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  data: [],
};

export const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    onSetData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    onSetMoreData:(state,action:PayloadAction<any>) =>{
      [...state.data].concat(action.payload);
    }
  },
});

export const { onSetData,onSetMoreData } = appSlice.actions;
export default appSlice.reducer;
