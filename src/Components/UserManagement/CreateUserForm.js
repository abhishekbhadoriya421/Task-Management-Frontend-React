import React, { useState } from 'react';

export default function CreateUserForm() {
    const [messages, setMessages] = useState([
        { text: "Hi, how can I help you?", sender: "bot" },
        { text: "I need support with my account", sender: "user" }
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { text: newMessage, sender: "user" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Left Side - Create User Form */}
                <div className="col-md-6">
                    <div className="card shadow-sm p-4">
                        <h3 className="mb-4">User Registration</h3>
                        <form>
                            <div className="mb-3">
                                <label for="user_name" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="user_name" name="user_name" required />
                            </div>

                            <div className="mb-3">
                                <label for="user_email" className="form-label">User Email</label>
                                <input type="email" className="form-control" id="user_email" name="user_email" />
                            </div>

                            <div className="mb-3">
                                <label for="employee_id" className="form-label">Employee ID</label>
                                <input type="number" className="form-control" id="employee_id" name="employee_id" required />
                            </div>

                            <div className="mb-3">
                                <label for="mobile_number" className="form-label">Mobile Number</label>
                                <input type="number" className="form-control" id="mobile_number" name="mobile_number" required />
                            </div>
                            <div className="mb-3">
                                <label for="status" className="form-label">Status</label>
                                <select className="form-select" id="status" name="status" required>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Create
                            </button>
                        </form>
                    </div>
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