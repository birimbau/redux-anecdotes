import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter as filterAction } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(filterAction(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
