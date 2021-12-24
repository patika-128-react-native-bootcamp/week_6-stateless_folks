export default function reducer(state, action) {
  switch (action.type) {
    case 'dark':
      return {
        ...state,
        theme: 'dark',
      };
    case 'light':
      return {...state, theme: 'light'};
    default:
      return state;
  }
}
