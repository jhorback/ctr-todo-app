import React, {useEffect} from "react";
import { TodoItem, TodoListName } from "../../app/store";
import { useSelector, useDispatch, useStore } from 'react-redux';
import { RootState } from "../../app/store";
import { deleteDoneItem, addDoneItem } from "../doneList/doneListSlice";
import { deleteTodoItem, addTodoItem } from "../todoList/todoListSlice";
import "./ItemsList.scss";
import { ActionDetail } from "@material/mwc-list";
import "@material/mwc-list";
import "@material/mwc-list/mwc-check-list-item";
import "@material/mwc-icon";

/**
 * Observations:
 *   Too much knowledge/data logic in a UI component
 *   State could be re-organized to reduce this
 *   A common component should be able to be decoupled and generic
 *   Slices reduce the elegance of this sort of freedom
 *   Adding custom event listeners is cumbersome, unintuitive, hook magic
 *   Requireing a key on a list should not be neccessary
 *   Events don't have stopImmediatePropagation
 *   Event order is not in natural addListener order.
 */

/**/
export const ItemsList = (listName:TodoListName) => {

    const dispatch = useDispatch();
    const listElementRef = React.createRef<HTMLElement>();
    const items = useSelector<RootState, Array<TodoItem>>(state => 
        listName === TodoListName.TodoItems ? state.todoItems : state.doneItems
    );
    const state = useStore().getState() as RootState;
    
    const listSelected = (event:any) => {
        const {index} = event.detail;

        // sync the list element
        listName === TodoListName.TodoItems ?
            /*@ts-ignore*/
            listElementRef.current?.select(new Set()) :
            /*@ts-ignore*/
            listElementRef.current?.toggle(index);
       

        if (listName === TodoListName.TodoItems) {
            const itemText = state.todoItems[index].text;
            dispatch(deleteTodoItem(index));
            dispatch(addDoneItem(itemText));
        } else {
            const itemText = state.doneItems[index].text;
            dispatch(deleteDoneItem(index));
            dispatch(addTodoItem(itemText));
        }
    };

    const deleteItem = (event:Event, index:number, text:string) => {
        event.stopPropagation();
        listName === TodoListName.TodoItems ?
            dispatch(deleteTodoItem(index)) :
            dispatch(deleteDoneItem(index));
    };

    // listener for custom event
    useEffect(() => {
        const el = listElementRef.current;
        el?.addEventListener("action", listSelected);
        return () => {
            el?.removeEventListener("action", listSelected);
        };
    });

    const itemSelectedProp = (item:TodoItem) =>  item.done ? { selected: true} : {};

    return (
        <div className="ItemsList">    
            <mwc-list multi ref={listElementRef}>
                {
                    items.map((item, index) => (
                        <mwc-check-list-item left hasMeta
                            {...itemSelectedProp(item)}                  
                            class={item.done ? "done" : ""}
                            key={index}
                        >
                          {item.text}
                          <mwc-icon slot="meta" onClick={(e:Event) => deleteItem(e, index, item.text)}>delete</mwc-icon>
                      </mwc-check-list-item> 
                    ))
                }
            </mwc-list>
        </div>
    );
}