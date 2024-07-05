import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration Successful");
  };

  return (
    <div className="card p-4">
      <h2 className="mb-4">Register</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
