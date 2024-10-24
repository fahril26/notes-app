import React from "react";
import ItemsList from "./ItemsList";

export default function NotesList({ notes, onDelete, onMove }) {
  return (
    <>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <ItemsList
              key={note.id}
              data={note}
              onDelete={onDelete}
              onMove={onMove}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">TIdak ada catatan</p>
      )}
    </>
  );
}
