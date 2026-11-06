import { Link, NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/products", label: "Products" },
];

const Navbar = () => {
  return (
    <nav className="w-full shadow-xl py-3">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold">
          EraaSoft
        </Link>
        <ul className="flex gap-10">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-lg font-bold hover:text-sky-500 duration-300 ${
                    isActive ? "text-sky-500" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;