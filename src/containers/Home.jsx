import React, { useState, useRef, useEffect, useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillAlipaySquare, AiFillCloseCircle } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import Logo from "../assets/logo.png";
import Pins from "./Pins";
import AuthContext from "../context/AuthContext";
import SidebarContext from "../context/SidebarContext";
import { RiUser5Line } from "react-icons/ri";

const Home = () => {
  const { user } = useContext(AuthContext);
  //for mobile UI
  const { toggleSidebar, setToggleSidebar } = useContext(SidebarContext);
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);
  const openSideBar = () => {
    setToggleSidebar(true);
  };
  const closeSideBar = () => {
    setToggleSidebar(false);
  };
  return (
    <>
      <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
        {/* desktop sidebar starts*/}
        <div className="hidden md:flex h-screen flex flex-initial">
          {/* <Sidebar user={user && user} /> */}
          <Sidebar />
        </div>
        {/* desktop sidebar ends*/}

        {/* mobile sidebar starts */}
        <div className="flex md:hidden flex-row">
          {/* navbar starts*/}
          <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
            <HiMenu
              fontSize={40}
              className="cursor-pointer"
              onClick={openSideBar}
            />
            <Link to="/">
              <img src={Logo} alt="logo" className="w-28 justify-self-center" />
            </Link>
            {user !== null ? (
              <Link to={`user-profile/${user?._id}`}>
                <img src={user?.image} alt="logo" className="w-28" />
              </Link>
            ) : (
              <Link to="/login">
                <RiUser5Line className="mr-4" />
              </Link>
            )}
          </div>
          {/* navbar ends*/}
          {toggleSidebar && (
            <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
              <div className="absolute w-full flex justify-end items-center p-2">
                <AiFillCloseCircle
                  fontSize={30}
                  className="cursor-pointer"
                  onClick={closeSideBar}
                />
              </div>
              <Sidebar />
            </div>
          )}
        </div>
        {/* mobile sidebar ends */}
        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
          <Routes>
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/*" element={<Pins />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
