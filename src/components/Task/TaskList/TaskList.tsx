import { memo } from "react";
import { useAppSelector } from "../../../redux/store";
import { tasksSelectors } from "../../../redux/tasks/selectors";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = memo(() => {
  const taskIds = useAppSelector(tasksSelectors.getIds);

  return (
    <div>
        {taskIds.map((taskId) => {
          return <TaskItem key={taskId} taskId={taskId} />;
        })}
      </div>
  );
});