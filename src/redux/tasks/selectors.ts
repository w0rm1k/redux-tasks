import { EntityId } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { tasksAdapter } from "./adapter";

const { getSelectors } = tasksAdapter;
const { selectIds, selectById } = getSelectors();

const getById = (id: EntityId) => (state: RootState) => {
  return selectById(state.tasksReducer, id);
}

const getIds = (state: RootState) => {
  return selectIds(state.tasksReducer);
}

export const tasksSelectors = {
  getById,
  getIds,
}
