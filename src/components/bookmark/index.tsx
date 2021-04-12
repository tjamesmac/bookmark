import { useState } from "react";

interface BookmarkProps {
  label: string;
  onDelete: () => void;
}

function BookmarkInput() {
  const [state, setState] = useState("");
  return (
    <input onChange={({ target }) => setState(target.value)} value={state} />
  );
}

export function Bookmark({ label, onDelete }: BookmarkProps) {
  return (
    <>
      <li>
        <label className="bookmark">{label}</label>
        <BookmarkInput />
        <button className="btn-small" onClick={onDelete}>
          X
        </button>
      </li>
    </>
  );
}
