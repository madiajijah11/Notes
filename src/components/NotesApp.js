import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import NoteBody from "./NoteBody";
import { addNote } from '../redux/reducers/notes'

/**
 * The main application component that orchestrates the entire notes application.
 * It fetches notes from the Redux store and provides handler functions for note operations.
 * @returns {JSX.Element} The rendered component.
 */
const NotesApp = () => {
  /**
   * The list of notes from the Redux store.
   * @type {Array<import("../redux/reducers/notes").Note>}
   */
  const notes = useSelector((state) => state.notes.list);
  const dispatch = useDispatch()

  /**
   * Handles adding a new note.
   * @param {Object} noteData - The data for the new note.
   * @param {string} noteData.title - The title of the note.
   * @param {string} noteData.body - The body of the note.
   */
  const onAddNotes = ({ title, body }) => {
    const note = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    };

    const list = [...notes, note]

    dispatch(addNote(list))
  };

  /**
   * Handles archiving a note.
   * @param {number} id - The ID of the note to archive.
   */
  const onArchivedNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    const pickNote = notes.find((note) => note.id === id);

    const list = [...newNotes, {
      id: pickNote.id,
      title: pickNote.title,
      body: pickNote.body,
      createdAt: pickNote.createdAt,
      archived: true,
    }]

    dispatch(addNote(list))
  };

  /**
   * Handles activating (unarchiving) a note.
   * @param {number} id - The ID of the note to activate.
   */
  const onActiveNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    const pickNote = notes.find((note) => note.id === id);

    const list = [...newNotes, {
      id: pickNote.id,
      title: pickNote.title,
      body: pickNote.body,
      createdAt: pickNote.createdAt,
      archived: false,
    }]

    dispatch(addNote(list))
  };

  /**
   * Handles deleting a note.
   * @param {number} id - The ID of the note to delete.
   */
  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    dispatch(addNote(newNotes))
  };

  /**
   * Handles searching for notes.
   * It directly manipulates the DOM to show/hide notes based on the search query.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the search input.
   */
  const onSearch = (event) => {
    const listNotes = document.getElementsByClassName("note-item");
    
    for (const listNote of listNotes) {
      if (listNote.childNodes[0].childNodes[0].innerText.toLowerCase().includes(event.target.value.toLowerCase())) {
        listNote.style.display = "flex";
      } else {
        listNote.style.display = "none";
      }
    }
  };

  return (
    <>
      <Navbar onSearch={onSearch} />
      <NoteBody notes={notes} addNote={onAddNotes} addArchiveNote={onArchivedNote} addActiveNote={onActiveNote} onDelete={onDeleteNote} />
    </>
  );
};

export default NotesApp;
