const {showFormattedDate} = require('../utils')

/**
 * A component that displays a single note item.
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title of the note.
 * @param {string} props.createdAt - The creation date of the note.
 * @param {string} props.body - The content of the note.
 * @param {function(number): void} props.changeArchive - The function to call when changing the archive status of the note.
 * @param {number} props.id - The unique identifier for the note.
 * @param {string} props.change - The text to display on the archive/unarchive button.
 * @param {function(number): void} props.onDelete - The function to call when deleting the note.
 * @returns {JSX.Element} The rendered component.
 */
const NoteItem = ({ title, createdAt, body, changeArchive, id, change, onDelete }) => {

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button onClick={() => onDelete(id)} className="note-item__delete-button" type="submit">Delete</button>
        <button onClick={() => changeArchive(id)} className="note-item__archive-button" type="submit">{change}</button>
      </div>
    </div>
  );
};

export default NoteItem;
