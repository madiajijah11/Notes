import React from "react"
import FormInput from "./FormInput"
import NoteList from "./NoteList"

/**
 * The main body of the notes application.
 * It contains the form for adding new notes and the lists of active and archived notes.
 * @param {Object} props - The component's props.
 * @param {Array<import("../redux/reducers/notes").Note>} props.notes - The list of all notes.
 * @param {function(number): void} props.addArchiveNote - The function to call when archiving a note.
 * @param {function(number): void} props.addActiveNote - The function to call when activating a note.
 * @param {function(number): void} props.onDelete - The function to call when deleting a note.
 * @param {function(Object): void} props.addNote - The function to call when adding a new note.
 * @returns {JSX.Element} The rendered component.
 */
const NoteBody = ({notes, addArchiveNote, addActiveNote, onDelete, addNote}) => {
    const activeNotes = notes.filter(note => note.archived === false)
    const archiveNotes = notes.filter(note => note.archived === true)

    return (
        <main className="note-app__body">
            <FormInput addNote={addNote}/>
            <NoteList title={"Catatan Aktif"} change="Arsipkan" notes={activeNotes} changeArchive={addArchiveNote} onDelete={onDelete}/>
            <NoteList title={"Arsip"} change="Pindahkan" notes={archiveNotes} changeArchive={addActiveNote} onDelete={onDelete}/>
        </main>
    )
}

export default NoteBody