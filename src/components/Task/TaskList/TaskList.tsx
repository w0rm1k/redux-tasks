import { memo, useCallback } from "react";
import { ActionCreators } from "redux-undo";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { tasksSelectors } from "../../../redux/tasks/selectors";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = memo(() => {
  const dispatch = useAppDispatch()
  const taskIds = useAppSelector(tasksSelectors.getIds);
  const canUndo = useAppSelector(tasksSelectors.canUndo);
  const canRedo = useAppSelector(tasksSelectors.canRedo);

  const handleUndo = useCallback(() => {
    dispatch(ActionCreators.undo());
  }, [dispatch]);

  const handleRedo = useCallback(() => {
    dispatch(ActionCreators.redo());
  }, [dispatch]);

  return (
    <div>
        <button onClick={handleUndo} disabled={!canUndo}>Undo</button>
        <button onClick={handleRedo} disabled={!canRedo}>Redo</button>
        {taskIds.map((taskId) => {
          return <TaskItem key={taskId} taskId={taskId} />;
        })}
      </div>
  );
});