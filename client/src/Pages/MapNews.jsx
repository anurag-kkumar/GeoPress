import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nlp from "compromise";

import { useNews } from "../context/NewsContext";

import MapBox from "../Components/MapBox";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";
import Footer from "../Components/HomePage/Footer";
import NotFound from "./NotFound";

const MapNews = () => {
  const [ismenuopen, setismenuopen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { state } = useLocation();

  const { newsData } = useNews();

  // Get selected article
  const news = state?.news || newsData[state?.index];

  const extractPlace = (text) => {
    const places = nlp(text).places().out("array");

    if (places.length > 0) {
      return places[0].replace(/[^\w\s]/g, "").trim();
    }

    return "India";
  };

  const getCoordinates = async (place) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/geocode?place=${encodeURIComponent(place)}`
      );

      const data = await response.json();

      return {
        lat: data.lat,
        lng: data.lng,
      };
    } catch (error) {
      console.log(error);

      return {
        lat: 20.5937,
        lng: 78.9629,
      };
    }
  };

  useEffect(() => {
    const loadLocation = async () => {
      if (!news) return;

      const text = `${news.title || ""} ${news.description || ""}`;

      const place = extractPlace(text);

      const coords = await getCoordinates(place);

      setSelectedLocation({
        lat: coords.lat,
        lng: coords.lng,
        title: news.title,
        city: place,
      });

      setLoading(false);
    };

    loadLocation();
  }, [news]);

  if (!news) {
    return (
      <NotFound></NotFound>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav
          ismenuopen={ismenuopen}
          setismenuopen={setismenuopen}
        />
      </div>

      {ismenuopen && (
        <div className="fixed inset-0 bg-black/90 z-40 hidden">
          <Menu setismenuopen='back' />
        </div>
      )}

      <div className="pt-24 px-4">

        

        <div className="flex max-md:flex-col gap-4">

          <div className="w-[65%] max-md:w-full h-[80vh] rounded-xl overflow-hidden">
            <MapBox selectedLocation={selectedLocation} />
          </div>

          <div className="md:w-[35%] max-md:w-full bg-white/10 rounded-xl p-6">

            {loading ? (
              <p className="text-white">Loading...</p>
            ) : (
              <>
                <img
                  src={
                    news.image ||
                    "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  alt={news.title}
                  className="rounded-lg mb-4"
                />

                <h2 className="text-2xl font-bold text-white">
                  {news.title}
                </h2>

                <p className="text-gray-300 mt-4">
                  {news.description}
                </p>

                <p className="text-yellow-300 mt-6">
                  📍 {selectedLocation?.city}
                </p>

                <p className="text-gray-400 mt-2">
                  Source: {news.source}
                </p>

                <a
                  href={news.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Read Full Article
                </a>
                {/* Back Button */}
                <button
                  onClick={() => navigate(-1)}
                  className="mb-4 bg-red-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg mx-2"
                >
                  ← Back to news
                </button>
              </>
            )}

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MapNews;