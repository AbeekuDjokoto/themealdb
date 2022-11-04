import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">foodl</h1>
      </div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/search"><li>Search</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
