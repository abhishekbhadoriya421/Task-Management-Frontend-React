import React, { useState } from 'react';
import { addUser } from '../../features/UserManagement/UserManagementSlice';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
export default function CreateUserForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.userManagement);
    const [messages, setMessages] = useState([
        { text: "Hi, how can I help you?", sender: "bot" },
        { text: "I need support with my account", sender: "user" }
    ]);

    const handleSend = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, sender: "user" }]);
            setNewMessage("");
        }
    };
    const [newMessage, setNewMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const [status, setStatus] = useState("Active")

    const handleOnSubmit = async (e) => {

        e.preventDefault();
        const UserObject = {
            user_name: userName,
            user_email: userEmail,
            employee_id: employeeId,
            mobile_number: mobileNumber,
            status: status
        }

        try {
            await dispatch(addUser(UserObject)).unwrap();
            // Success: reset form
            setUserName("");
            setUserEmail("");
            setEmployeeId("");
            setMobileNumber("");
            setStatus("Active");
            navigate("/user-management/view");
        } catch (error) {
            // Error: handle as needed
            // Optionally show error message or set error state
            console.error("Failed to create user:", error);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Left Side - Create User Form */}
                <div className="col-md-6">
                    {(loading === true) ? <Loader /> :
                        <div className="card shadow-sm p-4">
                            <h3 className="mb-4">User Registration</h3>
                            <form onSubmit={handleOnSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="user_name" className="form-label">User Name</label>
                                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" id="user_name" name="user_name" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="user_email" className="form-label">User Email</label>
                                    <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="form-control" id="user_email" name="user_email" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="employee_id" className="form-label">Employee ID</label>
                                    <input type="number" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="form-control" id="employee_id" name="employee_id" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                                    <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="form-control" id="mobile_number" name="mobile_number" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="form-select" id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Create
                                </button>
                            </form>
                        </div>
                    }
                </div>

                {/* Right Side - Chat Box */}
                <div className="col-md-6">
                    <div className="card shadow-sm p-4 d-flex flex-column" style={{ height: "100%" }}>
                        <h5 className="mb-3">Chat</h5>
                        <div className="flex-grow-1 overflow-auto mb-3" style={{ maxHeight: "420px" }}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`d-flex mb-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
                                    <span
                                        className={`p-2 rounded ${msg.sender === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}
                                        style={{ maxWidth: "75%" }}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                            <button className="btn btn-primary ms-2" onClick={handleSend}>
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}