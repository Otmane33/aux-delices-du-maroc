import React from "react";

const Header = () => {
  return (
    <header className="bg-sand text-spice py-12">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/assets/images/logo.png"
          alt="Aux Délices du Maroc Logo"
          className="mx-auto mb-6 h-26 w-auto"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3 font-serif">
          Aux Délices du Maroc
        </h1>
        <p className="text-lg md:text-xl mb-6 text-olive">
          Cuisine marocaine authentique à Draveil
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#menu"
            className="bg-spice text-sand font-bold py-2 px-6 rounded-full hover:bg-spice-dark transition duration-300"
          >
            Menu
          </a>
          <a
            href="#reservations"
            className="bg-transparent border-2 border-spice text-spice font-bold py-2 px-6 rounded-full hover:bg-spice hover:text-sand transition duration-300"
          >
            Réserver
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
