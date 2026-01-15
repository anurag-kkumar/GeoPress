import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import LogginForm from "./LogginForm";
import { useNavigate } from "react-router-dom";

function Nav({ ismenuopen, setismenuopen, setLoggedIn }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="text-white flex items-center justify-between px-4 md:px-10 py-4 backdrop-blur-sm w-full fixed top-0 z-50">

      {/* LOGO */}
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => navigate("/home")}
      >
        <img 
          src="https://ik.imagekit.io/dyp7q5hzjq/Pi7_black-and-white-earth-globe-icon-vector-33686338-removebg-preview%20(1).png"
          width="45"
          alt="logo"
        />
        <h1 className="text-xl font-semibold">GeoPress</h1>
      </div>

      {/* CENTER TITLE (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-2">
        <img
          src="data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2016%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16%209.00377C12.3179%2010.5718%209.40009%2013.6627%207.99633%2017.5C6.59256%2013.6627%203.68213%2010.5718%200%209.00377C3.68213%207.42816%206.59256%204.33725%207.99633%200.5C9.40009%204.33725%2012.3179%207.42816%2016%209.00377Z%22%20fill%3D%22%23D4F700%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          alt=""
          width="12"
        />
        <h2 className="text-lg">{ismenuopen ? "Menu" : "Welcome"}</h2>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">

        {/* DESKTOP MENU BUTTON */}
        <button
          className="border-[#E0FF00] border-2 rounded-3xl px-6 py-2 bg-transparent hover:bg-[#E0FF0030] transition max-md:hidden flex items-center gap-3"
          onClick={() => setismenuopen(!ismenuopen)}
        >
          {ismenuopen ? "Close" : "Menu"}

          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-5 bg-[#E0FF00] rounded"></span>
            <span className="block h-0.5 w-5 bg-[#E0FF00] rounded"></span>
          </div>
        </button>

        {/* MOBILE HAMBURGER */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setismenuopen(!ismenuopen)}
        >
          <span className="h-0.5 w-6 bg-[#E0FF00]"></span>
          <span className="h-0.5 w-6 bg-[#E0FF00]"></span>
          <span className="h-0.5 w-6 bg-[#E0FF00]"></span>
        </button>

        {/* PROFILE DROPDOWN */}
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setOpen(!open)}>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-xl border z-50">

              <div className="px-4 py-3 border-b">
                <p className="font-semibold text-gray-800">Joseph McFall</p>
                <p className="text-xs text-gray-500">name@flowbite.com</p>
              </div>

              <ul className="p-1 text-sm">
                <li>
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    User information
                  </button>
                </li>

                <li>
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    Saved locations
                  </button>
                </li>

                <li>
                  <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
                    Settings
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
}

export default Nav;
