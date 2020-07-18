import React from 'react';
import { connect } from 'react-redux';
import { add as addAction } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    props.add(content);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (content) => dispatch(addAction(content)),
  };
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
