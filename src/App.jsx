import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NavBar from "./components/NavBar";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/hotels">
          <Route exact path="" element={<Hotels />} />
          <Route exact path=":hotelId" element={<HotelDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
