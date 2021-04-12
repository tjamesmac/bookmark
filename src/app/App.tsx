import { useState, useReducer } from "react";
import { Bookmark } from "../components/bookmark";
import bookmarkReducer, { AddAction, DeleteAction } from "./reducer";
import { Wrapper, Container, Header, Button, List, Input } from "./App.style";

interface AddboomarkProps {
  handleClick: () => void;
}

export type Bookmarks = {
  label: string;
};

function Addbookmark({ handleClick }: AddboomarkProps) {
  return <Button onClick={handleClick}>+</Button>;
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
      <Container>
        <Button onClick={() => canAdd((prev) => !prev)}>{"+"}</Button>
        {add && (
          <>
            <Input onChange={({ target: { value } }) => setLabel(value)} />
            <Addbookmark handleClick={handleClick} />
          </>
        )}
        <List>
          {state.map(({ label }: Bookmarks) => (
            <Bookmark key={label} label={label} onDelete={handleDelete} />
          ))}
        </List>
      </Container>
    </>
  );
}

function App() {
  return (
    <Wrapper className="App">
      <Header className="App-header">
        <h1>Bookmarks</h1>
        <BookmarkApp />
      </Header>
    </Wrapper>
  );
}

export default App;
