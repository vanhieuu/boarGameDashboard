import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  character:[]
}
 
;

export const characterSlice = createSlice({
  initialState,
  name: "characters",
  reducers: {
    onSetCharacters: (state, action: PayloadAction<any>) => {
      state.character = action.payload
    },
  },
});

export const { onSetCharacters } = characterSlice.actions;
export default characterSlice.reducer;
