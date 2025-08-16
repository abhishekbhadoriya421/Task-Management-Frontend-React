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
                        <h3 className="mb-4">Create User</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select">
                                    <option>Select role</option>
                                    <option>Admin</option>
                                    <option>User</option>
                                    <option>Manager</option>
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
                        <div className="flex-grow-1 overflow-auto mb-3" style={{ maxHeight: "250px" }}>
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