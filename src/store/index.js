import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./slices/Userslice";
import adminSlice from "./slices/AdminSlice";

const store = configureStore({
    reducer:{
        users:userSlice.reducer,
        admin:adminSlice.reducer
    }
});

export default store;