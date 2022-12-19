import { createSlice } from "@reduxjs/toolkit";

const initialState = "1"

const currUserSlice = createSlice({
    name:"currentUser",
    initialState,
    reducers:{
        setCurrentUser(state,action){
            return action.payload
        }
    }
})

export const currUserReducer = currUserSlice.reducer
export const {setCurrentUser} = currUserSlice.actions