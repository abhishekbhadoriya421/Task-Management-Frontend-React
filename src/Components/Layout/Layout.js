// src/Layout.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            <main style={{ padding: "20px" }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
