import React, { Component } from "react";

export default class NoteAppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState(() => {
      return { title: event.target.value };
    });

    const { onSearch } = this.props;

    onSearch(event.target.value);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>My Notes</h1>
        <input
          type="text"
          value={this.state.title}
          placeholder="Cari catatan ..."
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}
