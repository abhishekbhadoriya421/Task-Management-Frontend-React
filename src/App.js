import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Layout from "./Components/Layout/Layout";
import UserManagementView from './Components/UserManagement/UserManagementViewComponent';
import CreateUserForm from './Components/UserManagement/CreateUserForm';
import ViewTaskList from './Components/TaskManagement/ViewTaskList';
import CreateTask from './Components/TaskManagement/CreateTask';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/user-management/view" element={<UserManagementView />} />
            <Route path="/user-management/create" element={<CreateUserForm />} />
            <Route path="/task-management/view" element={<ViewTaskList />} />
            <Route path="/task-management/create-task-form" element={<CreateTask />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
