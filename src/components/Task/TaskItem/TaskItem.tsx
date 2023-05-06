import { EntityId } from "@reduxjs/toolkit";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { tasksSelectors } from "../../../redux/tasks/selectors";
import { tasksActions } from "../../../redux/tasks/slice";

interface ITaskItemProps {
  taskId: EntityId;
}

export const TaskItem = memo<ITaskItemProps>(({ taskId }) => {
  const task = useAppSelector(tasksSelectors.getById(taskId));
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    if (task) {
      dispatch(tasksActions.updateOneTask({ ...task, dateEnd: new Date('2023-06-06').getTime() }));
    }
  }, [dispatch, task]);

  if (!task) {
    return null;
  }

  return (
    <div style={{ display: 'flex' }}>
      <span style={{ marginRight: 10 }}>{taskId}.</span>
      <span style={{ marginRight: 10 }}>{new Date(task.dateStart).toLocaleString()}</span>
      <span style={{ marginRight: 10 }}>{new Date(task.dateEnd).toLocaleString()}</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
})