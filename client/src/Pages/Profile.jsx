import React, { useState } from "react";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";

const Profile = () => {
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
      {/* Top Blue Bar */}
      {/* <div className="bg-[#0D1B5E] text-black rounded-xl p-4 flex justify-between items-center mb-10">
        <h1 className="text-sm font-semibold">MY PROFILE</h1>
        <button className="px-4 py-1 bg-white/20 rounded-lg text-sm">My Data</button>
      </div> */}

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/921/921071.png"
              alt="profile"
              className="w-28 h-28 rounded-full"
            />
           
          </div>

          {/* Personal Details */}
          <div className="border rounded-2xl p-6 mb-6 flex flex-col gap-4 bg-white shadow-sm">

  {/* Single Item */}
  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Your Name</span>
    <p className="font-semibold text-gray-800">xxxx</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Email</span>
    <p className="font-semibold text-gray-800">xxxx</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">Gender</span>
    <p className="font-semibold text-gray-800">xxxx</p>
  </div>

  <div className="flex items-center justify-between border rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition">
    <span className="text-gray-600 text-sm font-medium">City</span>
    <p className="font-semibold text-gray-800">xxxx</p>
  </div>

</div>

        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-gray-400 mb-4 flex items-center gap-2 uppercase">
            Nearby Crime Alerts (≤ 20 km)
          </h2>

         
        </div>
      </div>
    </div>
  );
};

export default Profile;
