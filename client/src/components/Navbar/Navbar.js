import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to ="/" className="navbar-brand">Google books</Link>
      <Link  to= "/" className="navbar-brand">Home</Link>
      
      <Link to ="/saved" className="navbar-brand">Saved</Link>
     
      
    </nav>
  );

export default Navbar;