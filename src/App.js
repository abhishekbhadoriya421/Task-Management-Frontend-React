import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
