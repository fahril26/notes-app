import React from "react";

// import initial data
import { getInitialData } from "../utils/index.js";
import NotesList from "./NotesList.jsx";
import TitleSection from "./TitleSection.jsx";
import NoteMaker from "./NoteMaker.jsx";
import Header from "./Header.jsx";

class MyNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keySearch: "",
    };

    this.onAddToNodeList = this.onAddToNodeList.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddToNodeList(dataNote) {
    this.setState((prevState) => {
      return { notes: [...prevState.notes, dataNote] };
    });
  }

  onDeleteHandler(id) {
    const confirm = window.confirm(
      "Apakah Anda yakin ingin menghapus catatan ini?"
    );

    if (confirm) {
      const notes = this.state.notes.filter((note) => note.id !== id);

      this.setState(() => {
        return { notes };
      });

      alert("Catatan berhasil di hapus");
    }
  }

  onMoveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );

    if (notes.length > 0) {
      this.setState(() => {
        return { notes };
      });
    }
  }

  onSearchHandler(key) {
    this.setState(() => {
      return { keySearch: key };
    });
  }

  render() {
    const getNotes = this.state.keySearch
      ? this.state.notes.filter(
          (note) =>
            note.title.toLocaleLowerCase().includes(this.state.keySearch) &&
            !note.archived
        )
      : this.state.notes.filter((note) => !note.archived);

    const getArchive = this.state.keySearch
      ? this.state.notes.filter(
          (note) =>
            note.title.toLocaleLowerCase().includes(this.state.keySearch) &&
            note.archived
        )
      : this.state.notes.filter((note) => note.archived);

    return (
      <div>
        <Header onSearch={this.onSearchHandler} />

        <div className="note-app__body">
          <NoteMaker onAddToNodeList={this.onAddToNodeList} />

          <div>
            <TitleSection>Catatan Aktif</TitleSection>
            <NotesList
              notes={getNotes}
              onDelete={this.onDeleteHandler}
              onMove={this.onMoveHandler}
            />
          </div>

          <div>
            <TitleSection>Arsip</TitleSection>
            <NotesList
              notes={getArchive}
              onDelete={this.onDeleteHandler}
              onMove={this.onMoveHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyNotesApp;
