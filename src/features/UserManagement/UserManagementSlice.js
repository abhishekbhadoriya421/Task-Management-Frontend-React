import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initailState = {
    coreUser: [],
    loading: false,
    success_msg: null,
    error_msg: null
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

/**
 * handle Fetch User Request 
 */
export const fetchUsers = createAsyncThunk(
    'user-management/get-user',
    async (arg, { rejectWithValue }) => {
        console.log('here')
        try {
            const response = await fetch('http://localhost:8080/user/get-user');
            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.message)
            } else {
                const responseData = await response.json();
                return responseData.user;
            }

        } catch (err) {
            return rejectWithValue(err.message);
        }

    }
)

const UserManagementSlice = createSlice({
    name: 'user-management',
    initialState: initailState,
    reducers: {
        addUser: handleAddUser,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.success_msg = null;
            state.error_msg = null;
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.coreUser = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                toast.error(`❌ ${action.payload}`);
            })
    }
});

export const { addUser } = UserManagementSlice.actions;

export default UserManagementSlice.reducer;