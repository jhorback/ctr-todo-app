import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, TodoItem } from '../../app/store';




const initialState: Array<TodoItem> = [{
  text: "INITIAL ITEM FROM STORE",
  done: false
}];


export const todoListSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
      addTodoItem: (state, action: PayloadAction<string>) => {
        state.unshift({
            text: action.payload,
            done: false
        });
      },
      deleteTodoItem: (state, action: PayloadAction<number>) => {
        state.splice(action.payload, 1);
      }
    }
});


export const { addTodoItem, deleteTodoItem } = todoListSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.todoItems;

export default todoListSlice.reducer