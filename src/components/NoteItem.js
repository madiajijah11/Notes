const {showFormattedDate} = require('../utils')

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
