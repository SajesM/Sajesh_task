import React, { Component } from "react";

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitNote = (event) => {
    event.preventDefault();

    this.props.addNote(this.state);

    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    return (
    <div className="create-note">
      <form className="create-note-form" onSubmit={this.submitNote}>

        <input
          className="create-note-input"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <textarea
          className="create-note-textarea"
          name="content"
          placeholder="Enter note ..."
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button className="create-note-button" type="submit">
          Add
        </button>

      </form>
    </div>
    );
  }
}

export default CreateNote;