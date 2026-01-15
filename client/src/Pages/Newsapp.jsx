import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const Newsapp = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);

  const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

  // Fetch Data from MockAPI
  const getData = async () => {
    try {
      const query =
        search.trim() === ""
          ? API_URL
          : `${API_URL}?city=${search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()}`;

      const response = await fetch(query);
      const jsonData = await response.json();

      setNewsData(jsonData.slice(0, 12)); // limit cards
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    getData(); // auto update when clicking category
  };

  return (
    <div className="bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] w-full h-full">
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

      {/* Search + Categories */}
      <div className="w-full flex flex-col items-center pt-28">

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-[320px] sm:w-[400px] bg-white shadow-md rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Search by city…"
            value={search}
            onChange={handleInput}
            className="flex-1 bg-transparent outline-none text-gray-800 px-2"
          />
          <button
            onClick={getData}
            className="bg-[#E0FF00] text-black px-4 py-1.5 text-sm rounded-full hover:bg-blue-700 transition font-medium"
          >
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Delhi", "Mumbai", "Noida", "Pune", "Jaipur"].map((item) => (
            <button
              key={item}
              value={item}
              onClick={userInput}
              className="px-5 py-2 rounded-full bg-white text-gray-700 shadow hover:bg-blue-600 hover:text-white font-medium capitalize transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 mt-8">
        <Card data={newsData} />
      </div>

      <Footer />
    </div>
  );
};

export default Newsapp;
