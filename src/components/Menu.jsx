import React from "react";
import menuData from "../data/menuData.json";

const MenuItem = ({ name, description, price }) => (
  <div className="border-b border-olive-light py-4 group hover:bg-sand transition duration-300 ease-in-out">
    <div className="flex justify-between items-baseline">
      <h4 className="text-xl font-medium text-spice group-hover:text-spice-dark transition duration-300">
        {name}
      </h4>
      <span className="text-lg font-bold text-terracotta group-hover:text-terracotta-dark transition duration-300">
        {price}€
      </span>
    </div>
    {description && (
      <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition duration-300">
        {description}
      </p>
    )}
  </div>
);

const MenuSection = ({ title, items, imageSrc }) => (
  <div className="mb-12">
    <div className="relative h-64 mb-6 rounded-lg overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-3xl font-semibold text-white text-center">
          {title}
        </h3>
      </div>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-spice text-center mb-12 hover:text-spice-dark transition duration-300">
          Notre Menu
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuData.sections.map((section, index) => (
            <MenuSection key={index} {...section} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4 hover:text-gray-900 transition duration-300">
            Tous nos plats sont préparés avec des ingrédients frais et des
            épices authentiques importées du Maroc.
          </p>
          <a
            href="#reservations"
            className="bg-spice hover:bg-spice-dark text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105 inline-block"
          >
            Réserver une Table
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
