import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} Note
 * @property {number} id - The unique identifier for the note.
 * @property {string} title - The title of the note.
 * @property {string} body - The content of the note.
 * @property {string} createdAt - The creation date of the note.
 * @property {boolean} archived - The archived status of the note.
 */

/**
 * The initial state for the notes feature.
 * @type {{list: Array<Note>}}
 */
const initialState = {
  list: []
};

/**
 * The Redux slice for managing notes.
 * It includes the reducer and actions for adding notes.
 */
const noteReducer = createSlice({
  name: "notes",
  initialState,
  reducers: {
    /**
     * Redux action to set the list of notes.
     * @param {Object} state - The current state.
     * @param {Object} action - The Redux action.
     * @param {Array<Note>} action.payload - The new list of notes.
     */
    addNote: (state, action) => {
      state.list = action.payload;
    },
  },
});

/**
 * The action creator for adding a note.
 * @type {import('@reduxjs/toolkit').ActionCreatorWithPayload<Array<Object>, string>}
 */
export const { addNote } = noteReducer.actions;

export default noteReducer.reducer;
