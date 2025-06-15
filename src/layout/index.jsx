import React, { forwardRef } from "react";
import { Navbar } from "../components";
import { Footer, Hero, About, MyProjects, Contact } from "../sections";

const Layout = forwardRef((props, ref) => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero ref={ref} />
        {/* Placeholder invisible, sert uniquement à l'observation */}
        {/* <div className="hero-placeholder" /> */}
        <About />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
});

export default Layout;
