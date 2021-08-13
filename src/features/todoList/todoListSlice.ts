import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';


interface TodoItem {
    text: string,
    done: boolean
};

const initialState: Array<TodoItem> = [];


export const todoListSlice = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
        state.unshift({
            text: action.payload,
            done: false
        });
      }
    }
});


export const { addTodo } = todoListSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.todoItems;

export default todoListSlice.reducer