import { useState } from "react";
import { ListItem, Label, Input } from "./index.style";
import { Button } from "../../app/App.style";

interface BookmarkProps {
  label: string;
  onDelete: (x: string) => void;
}

function BookmarkInput() {
  const [state, setState] = useState("");
  return (
    <Input onChange={({ target }) => setState(target.value)} value={state} />
  );
}

export function Bookmark({ label, onDelete }: BookmarkProps) {
  return (
    <>
      <Label className="bookmark">{label}</Label>
      <ListItem>
        <Button className="btn-small" onClick={() => onDelete(label)}>
          X
        </Button>
        <BookmarkInput />
      </ListItem>
    </>
  );
}
