import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

function Navbar() {
  const context = useContext(UserContext);
  const isScrolled = useScroll();

  if (!context) {
    return null;
  }

  return (
    <nav className={isScrolled ? "navbar navbar-scrolled" : "navbar"}>
      <Link to="/">Home</Link>
      {context.user && <Link to="/posts">Posts</Link>}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
