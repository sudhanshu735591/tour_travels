import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-yellow-300">
      <div
        onClick={() => navigate("/")}
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90 cursor-pointer"
      >
        Title
      </div>

      <nav className="hidden sm:flex justify-between items-center gap-20 font-semibold">
        <ul className="flex gap-10">
          <li
            onClick={() => navigate("/")}
            className="hover:text-gray-500 cursor-pointer"
          >
            Home
          </li>
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li
            onClick={() => navigate("/servicesection")}
            className="hover:text-gray-500 cursor-pointer"
          >
            Services
          </li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>

        {showMenu && (
          <ul className="flex flex-col gap-2">
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
