import React, { useEffect, useState } from "react";
import MapBox from "../Components/MapBox";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

const MapNews = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const CITIES = ["Delhi", "Mathura", "Agra"];
  const API_URL = "https://691ad72b2d8d785575706193.mockapi.io/geopress/news";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const filterNews = (city) => {
    if (city === "OTHER") {
      const otherNews = news.filter((item) => !CITIES.includes(item.city));
      setFiltered(otherNews);
    } else {
      const cityNews = news.filter(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );
      setFiltered(cityNews);
    }
  };

  return (
    <div className=" flex flex-col w-full bg-black">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav
          ismenuopen={ismenuopen}
          setismenuopen={setismenuopen}
          setLoggedIn={setLoggedIn}
        />
      </div>

      {/* MENU */}
      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 w-[85%]">
          <Menu setismenuopen={setismenuopen} />
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex max-md:flex-col pt-24 gap-4">


        

        {/* RIGHT SIDE MAP */}
       {!ismenuopen && ( 
  <div className="w-[65%] h-[80vh] mx-auto rounded-xl overflow-hidden shadow-xl border border-white/10">
    <MapBox selectedLocation={selectedLocation} />
  </div>)};
  {/* LEFT SIDE LIST */}
  {!ismenuopen && ( 
        <div className="max-md:w-11/12 md:w-[35%] mx-auto bg-black/30 backdrop-blur-md rounded-xl border border-white/10 overflow-y-scroll shadow-lg">

          {/* FILTER BUTTONS */}
          <div className="flex gap-3 p-4 flex-wrap">
            {["Delhi", "Mathura", "Agra", "OTHER"].map((city) => (
              <button
                key={city}
                onClick={() => filterNews(city)}
                className="px-4 py-2 bg-[#E0FF00] text-black font-semibold rounded-full shadow hover:bg-blue-600 hover:text-white transition text-sm"
              >
                {city}
              </button>
            ))}
          </div>

          {/* NEWS LIST */}
          <div className="flex flex-col  p-4 space-y-4 ">
            {filtered.length === 0 ? (
              <p className="text-gray-300 text-center">No News Selected</p>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    setSelectedLocation({
                      lat: item.latitude,
                      lng: item.longitude,
                      title: item.headline,
                    })
                  }
                  className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow cursor-pointer hover:bg-white/20 "
                >
                  <h3 className="font-bold text-white">{item.headline}</h3>
                  <p className="text-sm text-gray-300">{item.city}</p>
                </div>
              ))
            )}
          </div>
        </div>)};


      </div>
      <Footer className="pt-10"></Footer>
    </div>
  );
};

export default MapNews;
