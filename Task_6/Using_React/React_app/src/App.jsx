import React, { Component } from "react";
import Header from "../components/Header";
import Note from "../components/note";
import CreateNote from "../components/CreateNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  addNote = (newNote) => {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote]
      };
    });
  };

  deleteNote = (id) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note, index) => index !== id)
      };
    });
  };

  render() {
    return (
      <div>
        <Header />

        <CreateNote addNote={this.addNote} />

        {this.state.notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={this.deleteNote}
          />
        ))}
      </div>
    );
  }
}

export default App;