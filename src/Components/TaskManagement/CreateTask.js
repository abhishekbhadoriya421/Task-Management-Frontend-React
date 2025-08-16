// import React, { useState } from "react";

const CreateTaskForm = ({ onSubmit }) => {
    // const [task, setTask] = useState({
    //     task_name: "",
    //     task_description: "",
    //     task_priority: "Medium",
    //     task_assigned_to: { user_name: "", user_email: "" },
    //     due_date: "",
    //     task_status: "Pending",
    // });

    return (
        <div className="card mt-4 shadow-sm">
            <div className="card-header bg-primary text-white">
                <h4 className="mb-0">➕ Create New Task</h4>
            </div>
            <div className="card-body">
                <form >
                    {/* Task Name */}
                    <div className="mb-3">
                        <label className="form-label">Task Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="task_name"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-3">
                        <label className="form-label">Task Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="task_description"
                            required
                        ></textarea>
                    </div>

                    {/* Priority */}
                    <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <select
                            className="form-select"
                            name="task_priority"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                    {/* Assigned To */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Assigned To (Name)</label>
                            <input
                                type="text"
                                className="form-control"
                                name="user_name"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Assigned To (Email)</label>
                            <input
                                type="email"
                                className="form-control"
                                name="user_email"
                                required
                            />
                        </div>
                    </div>

                    {/* Due Date */}
                    <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="due_date"
                            required
                        />
                    </div>

                    {/* Status */}
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                            className="form-select"
                            name="task_status"
                        >
                            <option>Pending</option>
                            <option>In-Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-success">
                        ✅ Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskForm;
