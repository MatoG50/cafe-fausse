import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-white h-20 flex items-center text-[24px] justify-between pr-10 pl-10">
      <div className="font-bold italic">Café Fausse</div>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default NavBar;
