import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/reservations", label: "Reservations" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between h-16">
        <div className="font-bold italic text-2xl sm:text-3xl text-amber-700 tracking-wide">
          Café Fausse
        </div>

        <div className="hidden md:flex gap-6 text-lg font-medium">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-all duration-200 px-2 py-1 ${
                  isActive
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-56 mt-6"
          >
            {links.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-amber-600 font-semibold" : "text-gray-700"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
