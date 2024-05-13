import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        addAdmin(state, action){
            state.push(action.payload);
        },
        deleteAdmin(state, action){
            state.splice(action.payload, 1);
        },
        deleteAdmins(state, action){
            return [];
        }

    },

})

export default adminSlice;
export const {addAdmin, deleteAdmin, deleteAdmins} = adminSlice.actions;