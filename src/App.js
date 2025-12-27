import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FirstSection from "./Components/FirstSection";
import Footer from "./Components/FooterSection";
import WomensPage from "./Components/WomensPage";
import MensPage from "./Components/MensPage";
import AccessoriesPage from "./Components/AccessoriesPage";
import SalesPage from "./Components/SalesPage";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import OwnerPanel from "./Components/OwnerPanel";
import OrderPanel from "./Components/OrderPanel";
import SignUp from "./Components/SignUp";
import OwnerLogin from "./Components/OwnerLogin";
import OrderManagement from "./Components/OwnerPage/OrderManagement";
import ProductManagement from "./Components/OwnerPage/ProductManagement";
import UserDetails from "./Components/OwnerPage/UserDetails";
import TotalRevenue from "./Components/OwnerPage/TotalRevinue";

/* 🔹 Backend URL */
axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  const [user, setUser] = useState(null);

  /* 🔹 Check login status once */
  useEffect(() => {
    axios
      .get("/auth/me", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FirstSection />
            </>
          }
        />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sale" element={<SalesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/owner" element={<OwnerPanel />} />
        <Route path="/order" element={<OrderPanel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner/orders" element={<OrderManagement />} />
        <Route path="/owner/products" element={<ProductManagement />} />
        <Route path="/owner/UserDetails" element={<UserDetails />} />
        <Route path="/owner/total-revenue" element={<TotalRevenue />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
