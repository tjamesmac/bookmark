import { Bookmarks } from "./App";

enum ActionKind {
  ADD = "ADD",
  EDIT = "EDIT",
  DELETE = "DELETE",
}

type Action = {
  type: ActionKind;
  payload: string;
};

export const AddAction = (label: string): Action => ({
  type: ActionKind.ADD,
  payload: label,
});

export const DeleteAction = (label: string): Action => ({
  type: ActionKind.DELETE,
  payload: label,
});

export default function bookmarkReducer(
  state: Bookmarks[],
  action: Action
): Bookmarks[] {
  switch (action.type) {
    case ActionKind.ADD:
      return [...state, { label: action.payload, value: "" }];
    case ActionKind.DELETE:
      return state.filter(({ label }) => label !== action.payload);
    default:
      return state;
  }
}
