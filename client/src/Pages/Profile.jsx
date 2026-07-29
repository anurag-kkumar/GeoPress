import React, { useState } from "react";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
const { user } = useContext(UserContext);
console.log("User:", user);
  const [ismenuopen, setismenuopen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav
          ismenuopen={ismenuopen}
          setismenuopen={setismenuopen}
          setLoggedIn={setLoggedIn}
        />
      </div>

      {/* Menu */}
      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <Menu setismenuopen={setismenuopen} />
        </div>
      )}

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-6">
           <img
 src={
    user?.profileImage ||
    (
      user?.gender === "Male"
        ? "https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202026-07-29%20143510.png"
        : user?.gender === "Female"
        ? "https://ik.imagekit.io/dyp7q5hzjq/Screenshot%202026-07-29%20143529.png"
        : "https://i.pravatar.cc/40"
    )
  }
  alt="profile"
  className="w-28 h-28 rounded-full object-cover"
/>

          </div>

          {/* Personal Details */}
          <div className="border rounded-2xl p-6 mb-6 flex flex-col gap-4 bg-white shadow-sm">

            {/* Single Item */}
            <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
              <span className="text-gray-600 text-sm font-medium">Your Name</span>
             <p className="font-semibold text-gray-800">
  {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
</p>
            </div>

            <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
              <span className="text-gray-600 text-sm font-medium">Email</span>
              <p className="font-semibold text-gray-800">{user?.email}</p>
            </div>

            <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
              <span className="text-gray-600 text-sm font-medium">Gender</span>
              <p className="font-semibold text-gray-800">{user?.gender}</p>
            </div>

            <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
              <span className="text-gray-600 text-sm font-medium">City</span>
              <p className="font-semibold text-gray-800">{user?.city}</p>
            </div>

          </div>

        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow p-3">
          <h2 className="font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase">
            <img src="https://instagram.fagr1-1.fna.fbcdn.net/v/t51.82787-15/528039462_18015509939751439_2713195068718439683_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzY5MzE4NzU3NTA3NDU1NzI4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=sDh8aE3t4IMQ7kNvwFY-XHG&_nc_oc=AdrW2PyqE-hcChOSa77qVzM58B_vhidlMONI2N3aDgC-t7an482Gz71q5VaE9G9h7aTfMltMGXKt2STEeosbSALG&_nc_zt=23&_nc_ht=instagram.fagr1-1.fna&_nc_gid=ShRyKShGxR5NZUbclGiz3w&_nc_ss=7b689&oh=00_AQCHkz41j37PLrGaeTPrX6GWU0pHmINuqaVMl1n2O-QVKg&oe=6A6FA54E" alt="" />
          </h2>


        </div>
      </div>
    </div>
  );
};

export default Profile;
