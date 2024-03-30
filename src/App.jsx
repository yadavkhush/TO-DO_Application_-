
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
