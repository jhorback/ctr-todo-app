import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../features/todoList/todoListSlice';
import doneListSlice from '../features/doneList/doneListSlice';
import imageListSlice from '../features/imageList/imageListSlice';


export const store = configureStore({
  reducer: {
    todoItems: todoListSlice,
    doneItems: doneListSlice,
    images: imageListSlice
  }
});

export interface TodoItem {
  text: string,
  done: boolean
}

export enum TodoListName {
  TodoItems = "todoItems",
  DoneItems = "doneItems"
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

