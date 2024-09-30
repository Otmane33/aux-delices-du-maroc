import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reservations from "./components/Reservations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-sand min-h-screen">
      <Header />
      <Navigation />
      <main className="container mx-auto p-6">
        <Welcome />
        <Menu />
        <Gallery />
        <About />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
