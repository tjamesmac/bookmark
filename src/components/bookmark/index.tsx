import { useState, useEffect, useRef } from "react";

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

function usePrevious(value: any) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export function Bookmark({ label, onDelete }: BookmarkProps) {
  return (
    <>
      <li>
        <label className="bookmark">{label}</label>
        <BookmarkInput />
        <button onClick={onDelete}>x</button>
      </li>
    </>
  );
}
