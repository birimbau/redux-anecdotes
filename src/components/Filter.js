import React from 'react';
import { connect } from 'react-redux';
import { filter as filterAction } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (event) => {
    props.filterAction(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={props.filter} onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterAction: (text) => dispatch(filterAction(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
