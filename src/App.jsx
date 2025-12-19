import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddMedicine from "./Pages/AddMedicine";
import MedicineList from "./Pages/MedicineList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/add-medicine" element={<AddMedicine/>} />
        <Route path="/medicine-list" element={<MedicineList/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
