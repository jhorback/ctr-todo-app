import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from 'react-redux';
import { addTodoItem } from "./todoListSlice";
import { searchForImages } from "../imageList/imageListSlice";
import { TodoListName } from "../../app/store";
import "@material/mwc-textfield"
import "./TodoList.scss";
import {ItemsList} from "../common/ItemsList";


export const TodoList = () => {
    const dispatch = useDispatch();

    const hasItems = useSelector<RootState, boolean>(state => state.todoItems.length > 0);

    const newTaskKeyUp = (event:any) => {
        if (event.key === "Enter") {
            const text = event.target.value
            dispatch(addTodoItem(text));
            dispatch(searchForImages(text));
            event.target.value = "";
        }
    };

    return (
        <div className="TodoList">    
            <div className={`content ${hasItems ? "has-items" : ""}`}>
                <mwc-textfield
                    name="newTask"
                    type="search"
                    label="Add a task"
                    icon="add_task"
                    autofocus
                    onKeyUp={newTaskKeyUp}
                ></mwc-textfield>
                {ItemsList(TodoListName.TodoItems)}
            </div>            
        </div>
    );
}