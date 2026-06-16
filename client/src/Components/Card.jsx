import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((news, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={
              news.image ||
              "https://via.placeholder.com/400x250?text=No+Image"
            }
            alt={news.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold text-lg mb-2">
              {news.title}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              {news.description?.slice(0, 120)}...
            </p>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {news.source}
              </span>

              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;