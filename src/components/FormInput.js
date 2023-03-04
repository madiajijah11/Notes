import React from "react";

class FormInput extends React.Component {
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

  onTitleChange(event) {
    this.setState((prev) => {
      return {
        title: event.target.value,
        maxChar: 50 - parseInt(event.target.value.length)
      };
    });
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEvent(event){
    event.preventDefault()
    this.props.addNote(this.state)
  }

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
