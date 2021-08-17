import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, TodoItem } from '../../app/store';



export interface ImagesSlice {
    urls: Array<string>,
    isLoading: boolean
}


const initialState: ImagesSlice = {
    urls: [],
    isLoading: false
};


export const imageListSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setImagesLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        addImageUrl: (state, action:PayloadAction<string>) => {
            state.urls.unshift(action.payload);
        },
        deleteImage: (state, action:PayloadAction<number>) => {
            state.urls.splice(action.payload, 1);
        }     
    }
});


export const { setImagesLoading, addImageUrl, deleteImage } = imageListSlice.actions;
export default imageListSlice.reducer;




export const searchForImages = (text:string) => async (dispatch:Function, getState:Function) => {
    const hasDogOrCat = text.toLowerCase().indexOf("dog") > -1 ||
      text.toLowerCase().indexOf("cat") > -1;
    
    if (hasDogOrCat === false) {
      return;
    }

    dispatch(setImagesLoading(true));
  
    const requestUrl = text.toLowerCase().indexOf("dog") > -1 ?
      "https://api.thedogapi.com/v1/images/search" :
      "https://api.thecatapi.com/v1/images/search";
  
    const url = new URL(requestUrl);
    url.searchParams.set("size", "thumb");
    url.searchParams.set("order", "RANDOM");
    url.searchParams.set("limit", "1");
    
    const response = await fetch(requestUrl, {
        headers: {"x-api-key": "67aa6e7d-22e1-4fed-bb25-a26927e52576"}
    }).then(r => r.json());
  
  
    dispatch(addImageUrl(response[0].url));
    dispatch(setImagesLoading(false));
  };