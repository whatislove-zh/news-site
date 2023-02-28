import { createSlice } from "@reduxjs/toolkit";

type initialType = number[]

const initialState:initialType = [] 


export const deleteSlice = createSlice({
    name:"@@delete",
    initialState,
    reducers:{
        addId: (state, action) => {state.push(action.payload)}
    }
})

export const {addId} = deleteSlice.actions
export const deleteItemsReducer = deleteSlice.reducer