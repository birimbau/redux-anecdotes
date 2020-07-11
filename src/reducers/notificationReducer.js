const initialState = '';
export const add = (data) => ({
  type: 'ADD_NOTIFICATION',
  data,
});

export const remove = () => ({
  type: 'REMOVE_NOTIFICATION',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.data;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

export default reducer;
