import React from "react";
import App from "../App";
import Card from "../Card";
import AnimatedText from "../AnimatedText";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {App()}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to <span className="text-gradient bg-gradient-to-r from-blue-700 to-blue-300">Recipe 1.0</span> {/* Adjusted gradient */}
        </h1>
        <p className="text-xl text-gray-600 mt-9 ">
          <span className="code-look">
            This is a sample project to show my new skills in react, and
            tailwind development.
          </span>
        </p>
        {AnimatedText()}
      </div>
      <div className="cards-container grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Want to see <span className="text-gradient">more?</span>
        </h1>
        <p className="text-cl text-gray-600 mt-9">
          <span className="subheading-text">Visit our</span>
          <a
            href="/discover"
            className="ml-3 mr-3 inline-block px-4 py-2 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg shadow-md text-gray-900 dark:text-gray-100 font-semibold transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Discover
          </a>
          <span className="subheading-text">
            page for a wide variety of options.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;