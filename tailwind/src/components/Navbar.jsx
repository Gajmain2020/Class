import { Link } from "react-router-dom";

function NavButton({ path, title }) {
  return (
    <Link to={path}>
      <div className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-400">
        {title}
      </div>
    </Link>
  );
}

export default function navbar() {
  return (
    <div className="flex gap-4 mt-1">
      <NavButton path="/" title="Home" />
      <NavButton path="/all-products" title="Products" />
      <NavButton path="/cart" title="cart" />
    </div>
  );
}
