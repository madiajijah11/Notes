import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

const noteReducer = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { addNote } = noteReducer.actions;

export default noteReducer.reducer;
