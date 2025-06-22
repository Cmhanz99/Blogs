import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({setData}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userID");
    window.location.href = "/login";
  };
  return (
    <nav className="flex fixed top-0 items-center justify-center p-2 bg-slate-900 w-full h-15 z-100">
      <div className="md:w-[80%] w-[98%] text-slate-200 flex justify-between items-center">
        <Link to={"/"} className="text-2xl">Blog</Link>
        {user && (
          <div className="flex items-center gap-5">
            <Link to={"/newsfeed"} className="hover:underline">News Feed</Link>
            <p>{user}</p>
            <button
              onClick={handleLogout}
              className="bg-slate-500 py-1 px-4 rounded-md text-slate-200 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
