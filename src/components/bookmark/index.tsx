import { useState, useEffect } from "react";
import { ListItem, Label, Input } from "./index.style";
import { Button } from "../../app/App.style";

interface BookmarkProps {
  label: string;
  value: string;
  onDelete: (x: string) => void;
}

const storageKey = "books";

function addToStorage({
  label,
  value,
}: {
  label: string;
  value: string;
}): void {
  const storage = window.localStorage;
  const current = storage.getItem(storageKey);
  if (current) {
    const books = JSON.parse(current);
    const newValue = books.map((book: any) => {
      if (book.label === label) {
        book.value = value;
        return book;
      } else {
        return book;
      }
    });
    storage.setItem(storageKey, JSON.stringify(newValue));
  }
}

export function Bookmark({ label, value, onDelete }: BookmarkProps) {
  const [state, setState] = useState(value);

  useEffect(() => setState(value), [value]);

  return (
    <>
      <Label className="bookmark">{label}</Label>
      <ListItem>
        <Button className="btn-small" onClick={() => onDelete(label)}>
          X
        </Button>
        <Input
          onChange={({ target }) => {
            setState(target.value);
            addToStorage({ label, value: target.value });
          }}
          value={state}
        />
      </ListItem>
    </>
  );
}
