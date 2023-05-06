import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import undoable from 'redux-undo'
import { tasksReducer } from './tasks/slice'

export const store = configureStore({
  reducer: {
    tasks: undoable(tasksReducer),
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type TDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
