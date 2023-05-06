import { createSlice, Dictionary, PayloadAction, Update } from "@reduxjs/toolkit";
import { ITask } from "../../types/task";
import { tasksAdapter } from "./adapter";

const { setAll, updateOne } = tasksAdapter;

interface ITaskState {
  ids: Array<ITask['id']>;
  entities: Dictionary<ITask>;
}

const initialState: ITaskState = {
  ids: [],
  entities: {},
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setAllTasks: (state, action: PayloadAction<Array<ITask>>) => {
      return setAll(state, action.payload);
    },
    updateOneTask: (state, action: PayloadAction<ITask>) => {
      const task = action.payload;
      const update: Update<ITask> = {
        id: task.id,
        changes: {
          dateStart: task.dateStart,
          dateEnd: task.dateEnd,
        }
      }

      return updateOne(state, update);
    },
  }
});

export const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;