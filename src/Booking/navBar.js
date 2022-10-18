
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import {  useNavigate} from 'react-router';
import { MyContext } from "../context";


export const NavBar = () => {
  const navigate =useNavigate()
  const{ user, setUser}= useContext(MyContext)
  const login = ()=>{
        localStorage.removeItem("token")
        navigate("/")
         setUser([])
    }
  return (
    <>
      <nav className="menu-links">
        <h3 className="logo">Indico Flights</h3>

        <ul className="nav-links">
          <NavLink
            to="/booking"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-dashcube" aria-hidden="true"></i></span>Book Tickets</li>
          </NavLink>
          <NavLink
            to="/pre"
            className={({ isActive }) => "home" + (isActive ? " active" : "")}
          >
            <li><span style={{marginRight:"10px"}}><i class="fa fa-database" aria-hidden="true"></i></span>Find Work</li>
          </NavLink>
       
        </ul>

        <ul className="nav2-links">
          <NavLink to="/" className="sign">
            <li onClick={()=>login()}><span style={{marginRight:"10px"}}><i class="fa fa-power-off" aria-hidden="true"></i></span>LogOut</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
