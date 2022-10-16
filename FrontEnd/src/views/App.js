import React from "react";

import Home from "./Home";
import Product from "../components/Product";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Layout from "./Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// router dom
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/category" element={<Category />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        </header>

        {/* hàm thông báo */}
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
