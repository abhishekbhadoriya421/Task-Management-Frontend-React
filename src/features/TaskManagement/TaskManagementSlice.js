import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    Tasks: [],
    loading: false,
    success_msg: null,
    error_msg: null
}

export const getAllTaskList = createAsyncThunk(
    'task-management/get-all',
    async (argu, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:8080/task-management/view-task-list');
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message);
            } else {
                const finalResponse = await response.json();
                return finalResponse;
            }
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

/**
 * handle Get All Task Request Status
 */
const getTasksPending = (state, action) => {
    state.loading = true;
    state.success_msg = null;
    state.error_msg = null;
    state.Tasks = [];
}

const getTasksFulFilled = (state, action) => {
    console.log(action.payload[0])
    state.loading = false;
    state.success_msg = "Successfully Fetched All Tasks";
    state.error_msg = null;
    state.Tasks = action.payload;
}

const getTasksFailed = (state, action) => {
    state.loading = false;
    state.success_msg = null;
    state.error_msg = action.payload;
    state.Tasks = [];
    toast.error(action.payload);
}

const TaskManagementSlice = createSlice({
    name: 'task-management',
    initialState: initialState,
    // reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getAllTaskList.pending, getTasksPending)
            .addCase(getAllTaskList.fulfilled, getTasksFulFilled)
            .addCase(getAllTaskList.rejected, getTasksFailed)
    }
});


export default TaskManagementSlice.reducer;