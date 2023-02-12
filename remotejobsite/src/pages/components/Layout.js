import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
