import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import './Discover.css';

const Discover = () => {

  return (
    <div className="container-search mx-auto px-4 bg-gray-100">
      {App()}
      <h1 className="text-4xl font-bold text-center my-10 text-red-400">Discover</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </div>
  );
};

export default Discover;