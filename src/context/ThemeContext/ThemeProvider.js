import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const ThemeContext = createContext();
export default function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}
