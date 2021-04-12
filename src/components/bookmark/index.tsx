import { useState } from "react";
import { ListItem, Label, Input } from "./index.style";
import { Button } from "../../app/App.style";

interface BookmarkProps {
  label: string;
  onDelete: () => void;
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
      <ListItem>
        <Label className="bookmark">{label}</Label>
        <BookmarkInput />
        <Button className="btn-small" onClick={onDelete}>
          X
        </Button>
      </ListItem>
    </>
  );
}
