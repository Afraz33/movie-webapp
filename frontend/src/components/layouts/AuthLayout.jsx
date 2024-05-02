import React from "react";

// project imports
// import Navbar from "../ui/navbar/Navbar";
// import Footer from "../ui/navbar/Footer";
import Footer from "../ui/footer/Footer";
import Navbar from "../ui/navbar/Navbar";
import Hero from "../ui/hero/Hero";
const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* <div>{children}</div> */}
      {/* <Hero /> */}

      <Footer />
    </div>
  );
};

export default AuthLayout;
