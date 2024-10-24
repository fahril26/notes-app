import React from "react";
import Button from "./Button";

export default function ItemsList({ data, onDelete, onMove }) {
  const dateRelease = new Date(data.createdAt);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateRelease.toLocaleDateString("id-ID", options);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{data.title}</h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__body">{data.body}</p>
      </div>
      <div className="note-item__action">
        <Button
          type={"button"}
          className={"note-item__delete-button"}
          onClick={() => onDelete(data.id)}
        >
          Hapus
        </Button>
        <Button
          type={"button"}
          className={"note-item__archive-button"}
          onClick={() => onMove(data.id)}
        >
          {data.archived ? "Pindahkan" : "Arsipkan"}
        </Button>
      </div>
    </div>
  );
}
