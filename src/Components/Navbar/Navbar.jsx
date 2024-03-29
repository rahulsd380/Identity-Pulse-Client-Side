import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log(result.user);
        navigate("/signin");
      })
      .then((error) => {
        console.log(error);
      });
  };
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-primary font-weight-bold" href="#">IdentityPulse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <Link to={'/profile'} className="nav-link">Manage Profile</Link>
        </li>
      </ul>
      <form className="d-flex gap-4" role="search">
      <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </div>

<div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle d-flex gap-2 align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
  <FaRegCircleUser></FaRegCircleUser>
    {
      user?.displayName
    }
  </button>
  {
  !user ? 
  <ul className="dropdown-menu ml-10">
    <li><a className="dropdown-item" href="#">Dashboard</a></li>
    <li><Link to={"/signin"} className="dropdown-item">Login</Link></li>
    <li><Link to={"/signup"} className="dropdown-item">Sign Up</Link></li>
  </ul>
  :
  <ul className="dropdown-menu ml-10">
    <li><a className="dropdown-item" href="#">Dashboard</a></li>
    <li><Link to={"/profile"} className="dropdown-item">Profile</Link></li> {/* Change to "/profile" or your desired profile route */}
    <li><Link onClick={handleLogout} to={"/signin"} className="dropdown-item">Logout</Link></li>
  </ul>
}
</div>
      </form>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;