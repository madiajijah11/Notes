import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import NoteBody from "./NoteBody";
import { addNote } from '../redux/reducers/notes'

const NotesApp = () => {
  const notes = useSelector((state) => state.notes.list);
  const dispatch = useDispatch()

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

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    dispatch(addNote(newNotes))
  };

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
