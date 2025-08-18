import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTaskList } from '../../features/TaskManagement/TaskManagementSlice.js';
import Loader from '../Loader/Loader';

const ViewTaskList = () => {
    const dispatch = useDispatch();
    const { Tasks, loading } = useSelector((state) => state.taskManagement);
    useEffect(() => {
        dispatch(getAllTaskList());
    }, [dispatch]);
    return (
        <div className="card mt-4">
            {/* Header */}
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-0 text-primary">📋 Task List</h2>
                    </div>
                    <div className="col-md-6">
                        <Link
                            to="/task-management/create-task-form"
                            className="btn btn-primary float-end"
                        >
                            Create Task
                        </Link>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="card-body">
                {(loading === true) ?
                    <Loader />
                    :
                    <div className="table-responsive shadow-sm rounded">
                        <table className="table table-striped table-hover align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Task Name</th>
                                    <th>Task Description</th>
                                    <th>Task Priority</th>
                                    <th>Assigned To</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Tasks.map((task, index) => (
                                    <tr key={task._id}>
                                        <td>{index + 1}</td>
                                        <td>{task.task_name}</td>
                                        <td>{task.task_description}</td>
                                        <td>{task.task_priority}</td>
                                        <td>
                                            {task.task_assigned_to.user_name} (
                                            {task.task_assigned_to.user_email})
                                        </td>
                                        <td>{new Date(task.due_date).toLocaleDateString()}</td>
                                        <td>
                                            {task.task_status === "Pending" ? (
                                                <span className="badge bg-secondary status-badge">
                                                    Pending
                                                </span>
                                            ) : task.task_status === "In-Progress" ? (
                                                <span className="badge bg-warning status-badge">
                                                    In Progress
                                                </span>
                                            ) : (
                                                <span className="badge bg-success status-badge">
                                                    Completed
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <a
                                                href={`edit?id=${task._id}`}
                                                className="btn btn-sm btn-warning me-2"
                                            >
                                                Edit
                                            </a>
                                            <a
                                                href={`delete?id=${task._id}`}
                                                className="btn btn-sm btn-danger"
                                                onClick={(e) => {
                                                    if (!window.confirm("Are you sure?")) {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            >
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default ViewTaskList;
