import anecdoteService from '../services/anecdotes';
const anecdotesAtStart = [];

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const data = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data,
    });
  };
};

export const vote = (id) => ({
  type: 'VOTE',
  data: { id },
});

export const add = (content) => {
  return async (dispatch) => {
    const data = await anecdoteService.createNew(content);
    dispatch({
      type: 'ADD',
      data,
    });
  };
};

const reducer = (state = anecdotesAtStart, action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':
      return state.map((anecdote) => {
        if (anecdote.id === action.data.id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1,
          };
        }
        return anecdote;
      });
    case 'ADD':
      return state.concat(action.data);
    default:
      return state;
  }
};

export default reducer;
