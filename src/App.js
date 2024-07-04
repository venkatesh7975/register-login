import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Counter from "./components/Counter";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Header />
        <h1 className="text-center mb-4">User Registration and Login</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
