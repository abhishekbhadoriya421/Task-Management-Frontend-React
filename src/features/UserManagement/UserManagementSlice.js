import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    coreUser: [
        {
            // _id: '689229ddc93e7a6894a666bd',
            // created_at: "1754408914415",
            user_name: "Didi",
            user_email: "did123@gmail.com",
            employee_id: 11,
            mobile_number: 1111111111,
            status: "Active"
        }
    ]
}

/**
 * Add User Reducer 
 */

function handleAddUser(state, action) { // Current State of user , action pay load data 
    state.coreUser.push({
        // _id : action.id
        user_name: action.payload.user_name,
        user_email: action.payload.user_email,
        employee_id: action.payload.employee_id,
        mobile_number: action.payload.mobile_number,
        status: action.payload.status
    });
}

const UserManagementSlice = createSlice({
    name: 'user-management',
    initialState: initailState,
    reducers: {
        addUser: handleAddUser,
    }
});

export const { addUser } = UserManagementSlice.actions;

export default UserManagementSlice.reducer;