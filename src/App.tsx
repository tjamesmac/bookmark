import { useState, useReducer } from "react";
import { Bookmark } from "./components/bookmark";
import "./App.css";

interface AddboomarkProps {
  handleClick: () => void;
}

type bookmarks = {
  label: string;
};

function Addbookmark({ handleClick }: AddboomarkProps) {
  return <button onClick={handleClick}>+</button>;
}
type Reducer<State, Action> = (state: State, action: Action) => State;

type State = {
  label: number;
};

enum ActionKind {
  ADD = "ADD",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

type Action = {
  type: ActionKind;
  payload: any;
};

const increaseAction: Action = {
  type: ActionKind.ADD,
  payload: 1,
};

const decreaseAction: Action = {
  type: ActionKind.DELETE,
  payload: 1,
};
const initialState: State = { label: 0 };
function bookmarkReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionKind.ADD:
      return {
        ...state,
        label: state.label + action.payload,
      };
    case ActionKind.DELETE:
      return {
        ...state,
        label: state.label - action.payload,
      };

    default:
      return state;
  }
}

function Stuff() {
  const [add, canAdd] = useState(false);
  const [bookmarks, setBookmarks] = useState<bookmarks[]>([]);
  const [label, setLabel] = useState("");
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);
  return (
    <>
      <p>Count: {state.label}</p>
      <button onClick={() => dispatch(increaseAction)}>+</button>
      <button onClick={() => dispatch(decreaseAction)}>-</button>
      <ul className="bookmarks">
        {bookmarks.map(({ label }: any) => (
          <Bookmark
            key={label}
            label={`${label}`}
            onDelete={() =>
              setBookmarks((prev) =>
                prev.filter(({ label: prevLabel }) => prevLabel !== label)
              )
            }
          />
        ))}
      </ul>

      <Addbookmark handleClick={() => canAdd((prev) => !prev)} />
      {add && (
        <>
          <input onChange={({ target: { value } }) => setLabel(value)} />
          <Addbookmark
            handleClick={() =>
              label !== "" && setBookmarks((prev) => [...prev, { label }])
            }
          />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stuff />
      </header>
    </div>
  );
}

export default App;
