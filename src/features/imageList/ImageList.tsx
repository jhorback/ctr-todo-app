import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from 'react-redux';
import { deleteImage, ImagesSlice } from "./imageListSlice";
import "@material/mwc-circular-progress";
import "./ImageList.scss";


export const ImageList = () => {
    const dispatch = useDispatch();

    const hasImages = useSelector<RootState, boolean>(state => state.images.urls.length > 0);
    const state = useSelector<RootState, ImagesSlice>(state => state.images);

    const clickedImage = (event:Event, index:number) => {
        dispatch(deleteImage(index));
    };

    return (
        <div className="ImageList" hidden={!hasImages}>    
            <div className="content">
                {
                    state.isLoading && (
                        <mwc-circular-progress indeterminate></mwc-circular-progress>
                    )
                }
                {
                    state.urls.map((url, index) => (
                        <img src={url} key={index} onClick={(e:any) => clickedImage(e, index)}/>
                    ))
                }        
            </div>     
        </div>
    );
}