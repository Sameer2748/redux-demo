import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            state.splice(action.payload, 1);
        },
        clearAllUser(state, action){
            return [];
        } 
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.clearAllUser,()=>{
            return [];
        });
    }
})



export default userSlice;
export const {addUser, removeUser, clearAllUser} = userSlice.actions;
