import { configureStore } from "@reduxjs/toolkit";
import UserManagementReducer from "../features/UserManagement/UserManagementSlice";
import TaskManagementReducer from "../features/TaskManagement/TaskManagementSlice";


export const store = configureStore({
    reducer: {
        userManagement: UserManagementReducer,
        taskManagement: TaskManagementReducer
    }
});
