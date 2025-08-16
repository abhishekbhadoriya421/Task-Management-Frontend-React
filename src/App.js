import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Layout from "./Components/Layout/Layout";
import UserManagementView from './Components/UserManagement/UserManagementViewComponent';
import CreateUserForm from './Components/UserManagement/CreateUserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/user-management/view" element={<UserManagementView />} />
            <Route path="/user-management/create" element={<CreateUserForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
