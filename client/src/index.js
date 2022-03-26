import React, { Component }  from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from './pages/Home';
import { SearchDashboard } from './pages/SearchDashboard';
import About from './pages/About';
import Uploadmain from './pages/Uploadmain'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="search" element={<SearchDashboard />} />
      <Route path="about" element={<About />} />
      <Route path="upload" element={<Uploadmain />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);