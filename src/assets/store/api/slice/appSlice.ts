import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  data: [],
  dataEvent:{}
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
    },
    onSetDataEvent:(state,action:PayloadAction<any>) =>{
      state.dataEvent = action.payload
    }
    
  },
});

export const { onSetData,onSetMoreData,onSetDataEvent } = appSlice.actions;
export default appSlice.reducer;
