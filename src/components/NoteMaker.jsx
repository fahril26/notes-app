import React from "react";
import TitleSection from "./TitleSection";
import Button from "./Button";

export default class NoteMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      bodyValue: "",
      limitInput: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.resetStateValue = this.resetStateValue.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const valueLength = event.target.value.length;
    const limitValue = 50;

    if (valueLength <= limitValue)
      this.setState(() => {
        return {
          titleValue: event.target.value,
          limitInput: limitValue - valueLength,
        };
      });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        bodyValue: event.target.value,
      };
    });
  }

  resetStateValue() {
    this.setState(() => {
      return {
        titleValue: "",
        bodyValue: "",
        limitInput: 50,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { onAddToNodeList } = this.props;
    const noteData = {
      id: +new Date(),
      title: this.state.titleValue,
      body: this.state.bodyValue,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAddToNodeList(noteData);
    this.resetStateValue();
    alert("Catatan berhasil di buat!");
  }

  render() {
    return (
      <div className="note-input">
        <TitleSection>Buat Catatan</TitleSection>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {this.state.limitInput}
        </p>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit"></p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah judul ..."
            required
            value={this.state.titleValue}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            required
            value={this.state.bodyValue}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <Button type={"submit"}>Buat</Button>
        </form>
      </div>
    );
  }
}
