import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/userdata";
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName.trim() === "" || password.trim() === "") {
      alert("Please fill out both fields!");
      return;
    }
    const foundUser = users.find(
      (u) => u.uName === userName && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("userID", foundUser.id);
      localStorage.setItem("user", userName);
      window.location.href = "/";
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-80 border border-gray-500 rounded p-4 gap-5"
      >
        <h2>Login</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="border p-2 border-gray-500 rounded"
            placeholder="Username"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="border p-2 border-gray-500 rounded"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-10">
          <button
            type="submit"
            className="p-2 bg-slate-900 text-white font-semibold rounded flex-1"
          >
            Login
          </button>
          <a href="" className="flex-1 underline text-blue-600">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
