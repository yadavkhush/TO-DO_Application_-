// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

function TaskInput() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addItem = () => {
    if (inputText.trim() !== '') {
      dispatch(addTask(inputText));
      setInputText('');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <input type='text' value={inputText} placeholder='Enter Todo Item Here' onChange={handleInputChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TaskInput;
