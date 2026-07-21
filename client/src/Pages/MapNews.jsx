import React, { useEffect, useState } from "react";
import MapBox from "../Components/MapBox";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import nlp from "compromise";

const MapNews = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [news, setNews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_MEDIASTACK_API_KEY;

  // Extract place using NLP
  const extractPlace = (text) => {
    const places = nlp(text).places().out("array");

    if (places.length > 0) {
      return places[0]
        .replace(/[^\w\s]/g, "")
        .trim();
    }

    return "India";
  };

  // Call Express backend
  const getCoordinates = async (place) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/geocode?place=${encodeURIComponent(place)}`
      );

      const data = await response.json();

      return {
        lat: data.lat || 20.5937,
        lng: data.lng || 78.9629,
      };
    } catch (error) {
      console.log("Geocode Error:", error);

      return {
        lat: 20.5937,
        lng: 78.9629,
      };
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=in&languages=en&limit=45`
        );

        const result = await response.json();

        const processedNews = await Promise.all(
          (result.data || []).map(async (item, index) => {
            const text = `${item.title || ""} ${item.description || ""}`;

            const place = extractPlace(text);

            const coords = await getCoordinates(place);

            return {
              id: index,
              title: item.title,
              description: item.description,
              source: item.source,
              city: place,
              latitude: coords.lat,
              longitude: coords.lng,
            };
          })
        );

        setNews(processedNews);
        setFiltered(processedNews);
      } catch (error) {
        console.log("News Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filterNews = (city) => {
    if (city === "ALL") {
      setFiltered(news);
      return;
    }

    const result = news.filter((item) =>
      item.city?.toLowerCase().includes(city.toLowerCase())
    );

    setFiltered(result);
  };

  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav
          ismenuopen={ismenuopen}
          setismenuopen={setismenuopen}
        />
      </div>

      {/* MENU */}
      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 w-[85%]">
          <Menu setismenuopen={setismenuopen} />
        </div>
      )}

      {/* CONTENT */}
      <div className="flex max-md:flex-col pt-24 gap-4 px-4">

        {/* MAP */}
        {!ismenuopen && (
          <div className="w-[65%] max-md:w-full h-[80vh] rounded-xl overflow-hidden border border-white/10">
            <MapBox selectedLocation={selectedLocation} />
          </div>
        )}

        {/* NEWS PANEL */}
        {!ismenuopen && (
          <div className="md:w-[35%] max-md:w-full h-[80vh] overflow-y-auto bg-black/30 backdrop-blur-md rounded-xl border border-white/10">

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-2 p-4">
              {[
                "ALL",
                "India",
                "Delhi",
                "Mumbai",
                "Pune",
                "Jaipur",
                "West Bengal",
              ].map((city) => (
                <button
                  key={city}
                  onClick={() => filterNews(city)}
                  className="px-4 py-2 bg-[#E0FF00] text-black rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
                >
                  {city}
                </button>
              ))}
            </div>

            {/* NEWS LIST */}
            <div className="p-4 space-y-4">

              {loading ? (
                <p className="text-center text-gray-300">
                  Loading News...
                </p>
              ) : filtered.length === 0 ? (
                <p className="text-center text-gray-300">
                  No News Found
                </p>
              ) : (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setSelectedLocation({
                        lat: item.latitude,
                        lng: item.longitude,
                        title: item.title,
                      })
                    }
                    className="p-4 bg-white/10 border border-white/20 rounded-xl cursor-pointer hover:bg-white/20 transition"
                  >
                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-yellow-300 text-sm mt-2">
                      📍 {item.city}
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                      Lat: {item.latitude.toFixed(4)}
                    </p>

                    <p className="text-gray-400 text-xs">
                      Lng: {item.longitude.toFixed(4)}
                    </p>
                  </div>
                ))
              )}

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MapNews;