import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import MapNews from "./MapNews";

const Newsapp = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [search, setSearch] = useState("");
  const [newsData, setNewsData] = useState([]);

  const API_KEY = import.meta.env.VITE_MEDIASTACK_API_KEY;

  const getData = async (keyword = "") => {
    try {
      let url = `https://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=in&languages=en&limit=12`;

      if (keyword.trim() !== "") {
        url += `&keywords=${keyword}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      const news = data.data || [];

    setNewsData(news);

    // Save news for MapNews page
    localStorage.setItem(
      "newsData",
      JSON.stringify(news)
      
    );
console.log(newsData);
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

  const handleSearch = () => {
    getData(search);
  };

  const userInput = (e) => {
    const city = e.target.value;
    setSearch(city);
    getData(city);
  };

  return (
    <div className="bg-[url(https://cdn.prod.website-files.com/6584ee98993ef2a2ba17f296/65850001dcdc7fa1686a8490_Noise_Black.webp)] w-full min-h-screen">
      
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

      {/* Search Section */}
      <div className="w-full flex flex-col items-center pt-28">

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-[320px] sm:w-[450px] bg-white shadow-md rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Search News..."
            value={search}
            onChange={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 bg-transparent outline-none text-gray-800 px-2"
          />

          <button
            onClick={handleSearch}
            className="bg-[#E0FF00] text-black px-4 py-1.5 rounded-full font-medium hover:bg-yellow-300 transition"
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
              className="px-5 py-2 rounded-full bg-white text-gray-700 shadow hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* News Cards */}
      <div className="px-6 mt-10">
        <Card data={newsData} />
        
      </div>
     
      <Footer />
    </div>
  );
};

export default Newsapp;