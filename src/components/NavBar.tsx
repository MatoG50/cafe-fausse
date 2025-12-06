import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-10 sticky top-0 z-50 pt-5 pb-5">
      <div className="font-bold italic text-3xl tracking-wide text-amber-700">
        Café Fausse
      </div>

      <div className="flex gap-6 text-lg font-medium">
        {[
          { to: "/", label: "Home" },
          { to: "/menu", label: "Menu" },
          { to: "/reservations", label: "Reservations" },
          { to: "/about", label: "About" },
          { to: "/gallery", label: "Gallery" },
        ].map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `transition-all duration-200 px-2 py-1 
              ${
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
    </nav>
  );
};

export default NavBar;
