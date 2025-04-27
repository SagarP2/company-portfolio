// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marketing from "./components/Marketing";
import ProjectProcess from "./components/ProjectProcess";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <ProjectProcess/>
      <Marketing />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
