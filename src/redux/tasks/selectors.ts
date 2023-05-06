import { EntityId } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { tasksAdapter } from "./adapter";

const { getSelectors } = tasksAdapter;
const { selectIds, selectById } = getSelectors();

const getById = (id: EntityId) => (state: RootState) => {
  return selectById(state.tasks.present, id);
}

const getIds = (state: RootState) => {
  return selectIds(state.tasks.present);
}

const canUndo = (state: RootState) => {
  return state.tasks.past.length > 0;
}

const canRedo = (state: RootState) => {
  return state.tasks.future.length > 0;
}

export const tasksSelectors = {
  getById,
  getIds,
  canRedo,
  canUndo,
}
