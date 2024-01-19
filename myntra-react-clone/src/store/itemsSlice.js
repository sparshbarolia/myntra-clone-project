import {createSlice} from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: 'items',
  initialState: [] ,
  reducers: {
    addInitialItems: (state, action) => {
      //jo array Fetchitems.jsx se arhi h
      //usko current state bnado
      return state = action.payload;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;