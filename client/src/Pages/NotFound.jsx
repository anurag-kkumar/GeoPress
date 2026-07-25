import React from "react";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400">
      <div className="flex flex-col items-center text-center px-6">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          className="w-80 max-w-full mb-6"
        />

        <h1 className="text-6xl md:text-8xl font-black text-black">
          404 PAGE
        </h1>

        <p className="mt-8 text-lg md:text-xl text-black">
          The page you were looking for could not be found.
        </p>

        <p className="mt-2 text-sm text-gray-700">
          Back to previous page
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-10 rounded-full bg-white px-10 py-4 text-xl md:text-2xl font-extrabold text-black shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_35px_90px_rgba(0,0,0,0.3)] hover:ring-4 hover:ring-black"
        >
          ← Back to Previous Page
        </button>
      </div>
    </div>
  );
}