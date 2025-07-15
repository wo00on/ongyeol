import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8f5f0]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goods" element={<Store />} />
            {/* 추후 About, Goods, Contact 등 추가 */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;