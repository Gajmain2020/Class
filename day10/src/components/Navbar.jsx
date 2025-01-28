import { Link } from "react-router-dom";

function NavButton({ path, title }) {
  return (
    // <div className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-400">
    //   <Link to={path}>{title}</Link>
    // </div>

    <Link to={path}>
      <div className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-400">
        {title}
      </div>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className="flex gap-5 mt-1">
      <NavButton path="/" title="Home" />
      <NavButton path="/about" title="About" />
      <NavButton path="/contact" title="Contact" />
      <NavButton path="/user" title="User" />
      <NavButton path="/product" title="Product" />
    </div>
  );
}

// dry => don't repeat yourself
