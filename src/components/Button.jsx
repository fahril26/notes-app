import React from "react";

export default function Button({ children, className, type, onClick }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
