import React from "react"
import FormInput from "./FormInput"
import NoteList from "./NoteList"

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