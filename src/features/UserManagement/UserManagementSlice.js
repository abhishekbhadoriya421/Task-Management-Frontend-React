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

const UserManagementSlice = createSlice({
    name: 'user-management',
    initialState: initailState,
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
            .addCase(addUser.pending, (state) => {
                state.loading = true;
                state.success_msg = null;
                state.error_msg = null;
            }).addCase(addUser.fulfilled, (state, action) => {
                state.loading = false;
                state.coreUser.push(action.payload);
                toast.success(`User Created Successfully Username: ${action.payload.user_name}, Id ${action.payload._id}`)
            })
            .addCase(addUser.rejected, (state, action) => {
                state.loading = false;
                toast.error(`❌ ${action.payload}`);
            })
    }
});


export default UserManagementSlice.reducer;