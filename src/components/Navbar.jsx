import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const context = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      {context.user && <Link to="/posts">Posts</Link>}

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
