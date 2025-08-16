import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../features/UserManagement/UserManagementSlice';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

const UserManagementView = () => {
    const { coreUser, loading } = useSelector((state) => state.userManagement);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const handleDeleteUser = (id) => {
        console.log("Delete" + id)
    }

    const handleUpdateUser = (id) => {
        console.log("Update" + id)
    }
    return (
        <div className="card" >
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <h4>User Management</h4>
                    </div>
                    <div className="col-md-6">
                        <Link to={'/user-management/create'} className=" btnn btn btn-primary float-end">Add User</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    {(loading === true) ?
                        <Loader />
                        :
                        <div className="col-md-12 table-responsive">
                            <table className="table table-bordered table-striped  text-center align-middle">
                                <thead className="table-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>Employee ID</th>
                                        <th>Mobile Number</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {coreUser.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.user_name}</td>
                                            <td>{user.user_email}</td>
                                            <td>{user.employee_id}</td>
                                            <td>{user.mobile_number}</td>
                                            <td>{user.status}</td>
                                            <td>{new Date(user.created_at * 1000).toLocaleString()}</td>
                                            <td className="d-flex justify-content-center">
                                                <button onClick={() => handleUpdateUser(user._id)} title="Update" className="btn btn-warning me-2 mt-1">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button onClick={() => handleDeleteUser(user._id)} title="Delete" className="btn btn-danger mt-1">
                                                    <i className="bi bi-trash3-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserManagementView;