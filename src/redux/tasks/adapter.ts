import { createEntityAdapter } from "@reduxjs/toolkit";
import { ITask } from "../../types/task";

export const tasksAdapter = createEntityAdapter<ITask>({
  selectId: (task) => task.id, // указываем какое поле является уникальным(в данном случае в принципе можно опустить)
  sortComparer: (a, b) => a.dateStart - b.dateStart, // эта штука умеет сортировать по выбранному полю
});
