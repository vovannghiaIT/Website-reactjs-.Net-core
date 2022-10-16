import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";

import { Outlet, Link } from "react-router-dom";
export class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pk_blok">
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
