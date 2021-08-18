import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, TodoItem } from '../../app/store';



const initialState: Array<TodoItem> = [];


export const doneListSlice = createSlice({
    name: 'doneItems',
    initialState,
    reducers: {
      deleteCompleted: (state) => {
        state.splice(0);
      },
      deleteDoneItem: (state, action: PayloadAction<number>) => {
        state.splice(action.payload, 1);
      },
      addDoneItem: (state, action: PayloadAction<string>) => {
        state.unshift({
            text: action.payload,
            done: true
        });
      }
    }
});


export const { deleteCompleted, deleteDoneItem, addDoneItem } = doneListSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.todoItems;

export default doneListSlice.reducer