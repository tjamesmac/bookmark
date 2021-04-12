import { useState, useReducer } from "react";
import { Bookmark } from "../components/bookmark";
import bookmarkReducer, { AddAction, DeleteAction } from "./reducer";
import "./App.css";

interface AddboomarkProps {
  handleClick: () => void;
}

export type Bookmarks = {
  label: string;
};

function Addbookmark({ handleClick }: AddboomarkProps) {
  return <button onClick={handleClick}>+</button>;
}

function initialState() {
  const storage = window.localStorage.getItem("books");
  return storage ? JSON.parse(storage) : [];
}

function addToStorage(label: string): void {
  const storage = window.localStorage;
  const current = storage.getItem("books");
  if (current) {
    const books = JSON.parse(current);
    storage.setItem("books", JSON.stringify([...books, { label }]));
  } else {
    storage.setItem("books", JSON.stringify([{ label }]));
  }
}

function deleteFromStorage(label: string): void {
  const storage = window.localStorage;
  const current = storage.getItem("books");
  if (current) {
    const books = JSON.parse(current).filter(
      (item: Bookmarks) => item.label !== label
    );
    storage.setItem("books", JSON.stringify(books));
  } else {
    storage.setItem("books", JSON.stringify([{ label }]));
  }
}

function BookmarkApp() {
  const [state, dispatch] = useReducer(bookmarkReducer, initialState());
  const [add, canAdd] = useState<true | false>(false);
  const [label, setLabel] = useState<string>("");

  function handleClick() {
    const stopAdd = label !== "" && state.length < 5;
    if (stopAdd) {
      addToStorage(label);
      stopAdd && dispatch(AddAction(label));
    }
  }

  function handleDelete() {
    deleteFromStorage(label);
    dispatch(DeleteAction(label));
  }

  return (
    <>
      <button className="btn" onClick={() => canAdd((prev) => !prev)}>
        +
      </button>
      {add && (
        <>
          <input onChange={({ target: { value } }) => setLabel(value)} />
          <Addbookmark handleClick={handleClick} />
        </>
      )}
      <ul className="bookmarks">
        {state.map(({ label }: Bookmarks) => (
          <Bookmark key={label} label={label} onDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookmarks</h1>
        <BookmarkApp />
      </header>
    </div>
  );
}

export default App;
