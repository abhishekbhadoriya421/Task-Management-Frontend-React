import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initailState = {
    coreUser: [],
    loading: false,
    success_msg: null,
    error_msg: null
}

/**
 * handle Fetch User Request 
 */
export const fetchUsers = createAsyncThunk(
    'user-management/get-user',
    async (arg, { rejectWithValue }) => {
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

// Handler Add User 
export const addUser = createAsyncThunk(
    'user-management/create-user',
    async (users, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8080/user/create-user', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(users)
            });
            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.message)
            } else {
                const responseData = await response.json();
                return responseData.model
            }
        } catch (error) {

        }
    }
)


// Handlers for fetchUsers
const fetchUsersPending = (state) => {
    state.loading = true;
    state.success_msg = null;
    state.error_msg = null;
};
const fetchUsersFulfilled = (state, action) => {
    state.loading = false;
    state.coreUser = action.payload;
};
const fetchUsersRejected = (state, action) => {
    state.loading = false;
    toast.error(`❌ ${action.payload}`);
};

// Handlers for addUser
const addUserPending = (state) => {
    state.loading = true;
    state.success_msg = null;
    state.error_msg = null;
};
const addUserFulfilled = (state, action) => {
    state.loading = false;
    state.coreUser.push(action.payload);
    toast.success(`User Created Successfully Username: ${action.payload.user_name}, Id ${action.payload._id}`);
};
const addUserRejected = (state, action) => {
    state.loading = false;
    toast.error(`❌ ${action.payload}`);
};


const UserManagementSlice = createSlice({
    name: 'user-management',
    initialState: initailState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, fetchUsersPending)
            .addCase(fetchUsers.fulfilled, fetchUsersFulfilled)
            .addCase(fetchUsers.rejected, fetchUsersRejected)
            .addCase(addUser.pending, addUserPending)
            .addCase(addUser.fulfilled, addUserFulfilled)
            .addCase(addUser.rejected, addUserRejected);
    }
});


export default UserManagementSlice.reducer;