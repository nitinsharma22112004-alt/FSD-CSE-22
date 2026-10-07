import React from "react";
import Header from "../component/Header";
import Header from "../component/Navbar";
import Home from "../component/Home";
import Footer from "../component/Footer";
const UserLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default UserLayout;
