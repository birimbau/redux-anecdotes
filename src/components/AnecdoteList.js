import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vote as voteAction } from '../reducers/anecdoteReducer';
import {
  remove as removeNotification,
  setNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes).filter((x) => {
    return x.content.includes(filter);
  });
  const dispatch = useDispatch();

  const vote = (model, content) => {
    dispatch(voteAction(model));
    dispatch(setNotification(`You voted for '${content}'`, 5));

    setTimeout(() => {
      removeNotification();
    }, 5000);
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
              <button onClick={() => vote(anecdote, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        ))}{' '}
    </>
  );
};

export default AnecdoteList;
