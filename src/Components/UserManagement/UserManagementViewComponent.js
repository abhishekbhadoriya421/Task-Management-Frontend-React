import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const UserManagementView = () => {
    const userList = useSelector((state) => state.userManagement.coreUser);

    return (
        <div className="card" >
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <h4>User Management</h4>
                    </div>
                    <div className="col-md-6">
                        <Link to={'/user-management/create'} className="btn btn-primary float-end">Add User</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-striped">
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
                            <tbody>
                                {userList.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.user_name}</td>
                                        <td>{user.user_email}</td>
                                        <td>{user.employee_id}</td>
                                        <td>{user.mobile_number}</td>
                                        <td>{user.status}</td>
                                        <td>Created At</td>
                                        <td>Action</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserManagementView;