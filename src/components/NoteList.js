import NoteItem from "./NoteItem";

/**
 * A component that displays a list of notes.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title of the note list (e.g., "Active Notes").
 * @param {Array<import("../redux/reducers/notes").Note>} props.notes - The array of notes to display.
 * @param {function(number): void} props.changeArchive - The function to call when changing the archive status of a note.
 * @param {string} props.change - The text to display on the archive/unarchive button.
 * @param {function(number): void} props.onDelete - The function to call when deleting a note.
 * @returns {JSX.Element} The rendered component.
 */
const NoteList = ({ title, notes, changeArchive, change, onDelete }) => {
  if (notes.length) {
    return (
      <div>
        <h2>{title}</h2>
        <div className="notes-list">
          {notes.map((note, i) => (
            <NoteItem key={i} id={i} {...note} change={change} changeArchive={changeArchive} onDelete={onDelete}/>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{title}</h2>
        <div className="notes-list__empty-message">
          <p>Tidak ada catatan</p>
        </div>
      </div>
    );
  }
};

export default NoteList;
