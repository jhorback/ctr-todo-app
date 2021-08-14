import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, TodoItem } from '../../app/store';



const initialState: Array<TodoItem> = [{
  text: "INITIAL ITEM FROM STORE - DONE",
  done: true
}];


export const doneListSlice = createSlice({
    name: 'doneItems',
    initialState,
    reducers: {
      deleteCompleted: (state) => {
        // doesn't seem to work
        console.log("deleteCompleted - not working?")
        state = [];
      },
      deleteDoneItem: (state, action: PayloadAction<number>) => {
        state.splice(action.payload, 1);
      },
      addDoneItem: (state, action: PayloadAction<string>) => {
        state.unshift({
            text: action.payload,
            done: false
        });
      }
    }
});


export const { deleteCompleted, deleteDoneItem, addDoneItem } = doneListSlice.actions


// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.todoItems;

export default doneListSlice.reducer