import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <>
   <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
        {/* <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink> */}
        <NavLink to="*" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
    
      <NavLink to="/protected">Protected</NavLink>
    </nav>
    </>
 
  )
}

export default Navbar;
