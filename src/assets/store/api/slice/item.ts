import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  items:[]
}
 
;

export const itemSlice = createSlice({
  initialState,
  name: "items",
  reducers: {
    onSetItem: (state, action: PayloadAction<any>) => {
      state.items = action.payload
    },
  },
});

export const { onSetItem } = itemSlice.actions;
export default itemSlice.reducer;
