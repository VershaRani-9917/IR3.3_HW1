import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails"


const Root = () => (
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="restaurants/:restaurantId" element={<RestaurantDetails />} />
    </Routes>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
