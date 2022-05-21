import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";

import AuthContext from "../context/AuthContext";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  //hide navbar (search) when user is not logged in
  if (user == null) return null;
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="m-1 " />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onFocus={() => navigate("/search")}
          className="outline-none p-2 w-full bg-white"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="md:block  hidden">
          <img src={user.image} alt="user" className="w-14 h-12 rounded-lg" />
        </Link>
        <Link
          to="create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
