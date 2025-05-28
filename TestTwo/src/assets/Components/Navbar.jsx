import React, { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import FaqAccordion from "../Component1/FAQ"; 


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <button 
              className="dropbtn" 
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Projects ▾
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/Pro1">Project 1</Link></li>
                <li><Link to="/Pro2">Project 2</Link></li>
                <li><Link to="/Pro3">Project 3</Link></li>
                <li><Link to="/Pro4">Project 4</Link></li>
                <li><Link to="/Pro5">Project 5</Link></li>
              </ul>
            )}
          </li>
    
        </ul>
      </nav>

     
    </>
  );
};

export default Navbar;