import { configureStore } from "@reduxjs/toolkit";
import UserManagementReducer from "../features/UserManagement/UserManagementSlice";


export const store = configureStore({
    reducer: {
        userManagement: UserManagementReducer
    }
});
