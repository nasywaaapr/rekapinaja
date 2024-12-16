import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./sidebar";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    console.log("Toggling sidebar"); // Debug log
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    console.log("Closing sidebar"); // Debug log
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A10?alt=media&token=32da8722-46a7-40ad-8fb8-ad143523d636"
            alt="Menu"
          />
        </div>
        <p className="title">Rekapin Aja!</p>
        <div className="user-info">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4proqs8i9n9-123%3A14?alt=media&token=1b8556c7-49be-4064-9606-6a0e1d760010"
            alt="User"
          />
          <span>Username</span>
        </div>
      </nav>
      <Sidebar 
        isOpen={isOpen} 
        closeSidebar={closeSidebar} 
        sidebarRef={sidebarRef} 
      />
    </>
  );
};

export default Navbar;