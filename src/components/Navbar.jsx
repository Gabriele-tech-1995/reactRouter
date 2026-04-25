import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useScroll from "../hooks/useScroll";

function Navbar() {
  const context = useContext(UserContext);
  const navbarRef = useScroll();

  if (!context) {
    return null;
  }

  return (
    <div
      ref={navbarRef}
      className="navbar fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm px-6 navbar-scrolled"
    >
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>

      <div className="flex gap-2">
        {context.user && (
          <Link to="/posts" className="btn btn-primary">
            Posts
          </Link>
        )}

        <Link to="/login" className="btn btn-outline">
          Login
        </Link>

        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
