import NoteItem from "./NoteItem";

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
