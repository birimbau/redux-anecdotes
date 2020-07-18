import React from 'react';
import { useSelector, connect } from 'react-redux';
import { vote as voteAction } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => props.anecdotes).filter((x) => {
    return x.content.includes(props.filter);
  });

  const vote = (model, content) => {
    props.vote(model);
    props.setNotification(`You voted for '${content}'`, 5);
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: state.anecdotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vote: (value) => dispatch(voteAction(value)),
    setNotification: (text, timeOut) =>
      dispatch(setNotification(text, timeOut)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
