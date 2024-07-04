import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link className="mr-4" to="/register">
        Register
      </Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
