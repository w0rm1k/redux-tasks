import { createSlice, PayloadAction, Update } from "@reduxjs/toolkit";
import { ITask } from "../../types/task";
import { tasksAdapter } from "./adapter";

const { getInitialState, setAll, updateOne } = tasksAdapter;

const initialState = getInitialState();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setAllTasks: (state, action: PayloadAction<Array<ITask>>) => {
      setAll(state, action.payload);
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

      updateOne(state, update);
    }
  }
});

export const { actions: tasksActions, reducer: tasksReducer } = tasksSlice;