import React, { useCallback, useEffect } from 'react';
import './App.css';
import { TaskList } from './components/Task/TaskList/TaskList';
import { tasks } from './mock/tasks';
import { useAppDispatch } from './redux/store';
import { tasksActions } from './redux/tasks/slice';

function App() {
  const dispatch = useAppDispatch();

  const init = useCallback(() => {
    dispatch(tasksActions.setAllTasks(tasks));
  }, [dispatch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      init();
    }, 5000);

    return () => {
      clearTimeout(timerId)
    }
  }, [init]);

  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
