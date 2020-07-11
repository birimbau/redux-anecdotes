import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote as voteAction } from '../reducers/anecdoteReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAction(id));
  };
  return (
    <>
      {anecdotes
        .sort((a, b) => {
          const voteA = a.votes;
          const voteB = b.votes;

          let comparison = 0;
          if (voteA < voteB) {
            comparison = 1;
          } else if (voteA > voteB) {
            comparison = -1;
          }
          return comparison;
        })
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}{' '}
    </>
  );
};

export default AnecdoteList;
