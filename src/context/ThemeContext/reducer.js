import { DARK, LIGHT, ADD_TO_BOOKMARK, SET_BOOKMARKS } from "./types";

export default function reducer(state, action) {
  switch (action.type) {
    case DARK:
      return {
        ...state,
        theme: "dark",
      };
    case LIGHT:
      return { ...state, theme: "light" };

    case ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmarks: {
          ...state.bookmarks,
          [action.payload.type]: [
            ...state.bookmarks[action.payload.type],
            action.payload.item,
          ],
        },
      };

    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.payload,
      };
    default:
      return state;
  }
}
