import React from "react";

/**
 * A form component for creating a new note.
 * It maintains its own state for the title and body of the note.
 * @extends React.Component
 */
class FormInput extends React.Component {
  /**
   * Initializes the component's state and binds event handlers.
   * @param {Object} props - The component's props.
   * @param {function(Object): void} props.addNote - The function to call when adding a new note.
   */
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  /**
   * Handles changes to the title input field.
   * Updates the title and remaining character count in the state.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
   */
  onTitleChange(event) {
    this.setState((prev) => {
      return {
        title: event.target.value,
        maxChar: 50 - parseInt(event.target.value.length)
      };
    });
  }

  /**
   * Handles changes to the body textarea field.
   * Updates the body in the state.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The change event.
   */
  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  /**
   * Handles the form submission.
   * Prevents the default form submission behavior and calls the `addNote` prop.
   * @param {React.FormEvent<HTMLFormElement>} event - The submit event.
   */
  onSubmitEvent(event){
    event.preventDefault()
    this.props.addNote(this.state)
  }

  /**
   * Renders the note input form.
   * @returns {JSX.Element} The rendered component.
   */
  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEvent}>
          <p className="note-input__title__char-limit">Sisa Karakter : {this.state.maxChar}</p>
          <input className="note-input__title" type={"text"} placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChange} required maxLength={50} />
          <textarea className="note-input__body" type={"text"} placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChange} required></textarea>
          <button className="note-input button" type="submit">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default FormInput;
