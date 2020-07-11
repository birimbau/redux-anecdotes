const initialState = '';

export const filter = (data) => ({
  type: 'FILTER',
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
