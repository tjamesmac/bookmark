import { useState, useReducer } from "react";
import { Bookmark } from "../components/bookmark";
import bookmarkReducer, { AddAction, DeleteAction } from "./reducer";
import { Wrapper, AddGroup, Container, Button, List, Input } from "./App.style";

interface AddboomarkProps {
  handleClick: () => void;
}

export type Bookmarks = {
  label: string;
  value: string;
};

const storageKey: string = "books";

function Addbookmark({ handleClick }: AddboomarkProps) {
  return <Button onClick={handleClick}>+</Button>;
}

function initialState() {
  const storage = window.localStorage.getItem(storageKey);
  return storage ? JSON.parse(storage) : [];
}

function addToStorage(label: string): void {
  const storage = window.localStorage;
  const current = storage.getItem(storageKey);
  if (current) {
    const books = JSON.parse(current);
    storage.setItem(
      storageKey,
      JSON.stringify([...books, { label, value: "" }])
    );
  } else {
    storage.setItem(storageKey, JSON.stringify([{ label, value: "" }]));
  }
}

function deleteFromStorage(label: string): void {
  const storage = window.localStorage;
  const current = storage.getItem(storageKey);
  if (current) {
    const books = JSON.parse(current).filter(
      (item: Bookmarks) => item.label !== label
    );
    storage.setItem(storageKey, JSON.stringify(books));
  }
}

function BookmarkApp() {
  const [state, dispatch] = useReducer(bookmarkReducer, initialState());
  const [label, setLabel] = useState<string>("");

  function handleClick() {
    const stopAdd = label !== "" && state.length < 5;
    if (stopAdd) {
      addToStorage(label);
      stopAdd && dispatch(AddAction(label));
    }
  }

  function handleDelete(value: string) {
    deleteFromStorage(value);
    dispatch(DeleteAction(value));
  }

  return (
    <>
      <Container>
        <List>
          {state.map(({ label, value }: Bookmarks) => (
            <Bookmark
              key={label}
              label={label}
              value={value}
              onDelete={handleDelete}
            />
          ))}
        </List>
        <AddGroup>
          <Addbookmark handleClick={handleClick} />
          <Input onChange={({ target: { value } }) => setLabel(value)} />
        </AddGroup>
      </Container>
    </>
  );
}

function App() {
  return (
    <Wrapper>
      <h1>Bookmarks</h1>
      <BookmarkApp />
    </Wrapper>
  );
}

export default App;
