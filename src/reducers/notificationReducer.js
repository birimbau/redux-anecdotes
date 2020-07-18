const initialState = '';

export const add = (data) => ({
  type: 'ADD_NOTIFICATION',
  data,
});

export const remove = () => ({
  type: 'REMOVE_NOTIFICATION',
});

export const setNotification = (text, timeOut = 10) => {
  return async (dispatch) => {
    dispatch(add(text));
    setTimeout(() => {
      dispatch(remove());
    }, timeOut * 1000);
  };
};

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
