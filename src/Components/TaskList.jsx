import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

function TaskList() {
  const items = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {//delete the each items after clicking on items delete button
    dispatch(deleteTask(index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (//rendering the list of items 
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
