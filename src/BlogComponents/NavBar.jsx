import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <h2>JTech Blog</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/create"><button >NewBlog</button></Link>
      </div>
    </div>
  );
};

export default NavBar;
