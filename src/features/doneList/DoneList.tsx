import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from 'react-redux';
import { deleteCompleted } from "./doneListSlice";
import { TodoListName } from "../../app/store";
import "@material/mwc-icon-button";
import "@material/mwc-button";
import "./DoneList.scss";
import {ItemsList} from "../common/ItemsList";


export const DoneList = () => {
    const dispatch = useDispatch();

    const doneItemsCount = useSelector<RootState, number>(state => state.doneItems.length);
    const listElementRef = React.createRef<HTMLDivElement>();
    const iconButtonRef = React.createRef<HTMLElement>();

    const toggleShowContent = (event:any) => {
        event.stopPropagation();
        listElementRef.current?.classList.toggle("open");
        iconButtonRef.current?.classList.toggle("open");
    };

    const deleteAllCompleted = (event:any) => {
        event.stopPropagation();
        dispatch(deleteCompleted());
    };

    return (
        <div className="DoneList" hidden={doneItemsCount === 0}>    
            <div className="content">
                <div className="completed-toolbar"
                    onClick={toggleShowContent}
                    >
                    <h2>Completed ({doneItemsCount})</h2>

                    <mwc-button
                        onClick={deleteAllCompleted}
                        ref={iconButtonRef}
                    >
                        Delete All
                    </mwc-button>
                    <mwc-icon-button
                        icon="keyboard_arrow_down"
                        onClick={toggleShowContent}
                    ></mwc-icon-button>
                </div>
                <div className="list" ref={listElementRef}>
                    {ItemsList(TodoListName.DoneItems)}
                </div>   
            </div>        
        </div>
    );
}