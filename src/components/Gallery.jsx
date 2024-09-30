import React from "react";

const GalleryImage = ({ src, alt }) => (
  <div className="relative overflow-hidden group rounded-lg shadow-lg">
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover transition duration-300 ease-in-out transform group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
      <button className="text-white bg-spice px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0 hover:bg-spice-dark">
        Voir Plus
      </button>
    </div>
  </div>
);

const Gallery = () => {
  const images = [
    { src: "/assets/images/1.webp", alt: "Tajine traditionnel marocain" },
    { src: "/assets/images/2.webp", alt: "Couscous royal aux légumes" },
    { src: "/assets/images/3.webp", alt: "Pastilla au poulet et aux amandes" },
    {
      src: "/assets/images/4.webp",
      alt: "Thé à la menthe et pâtisseries marocaines",
    },
    { src: "/assets/images/5.webp", alt: "Salade marocaine colorée" },
    {
      src: "/assets/images/6.webp",
      alt: "Intérieur du restaurant Aux Délices du Maroc",
    },
  ];

  return (
    <section id="galerie" className="py-16 bg-sand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-spice text-center mb-8">
          Notre Galerie
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Découvrez l'authenticité de notre cuisine marocaine à travers ces
          images alléchantes. Chaque plat est préparé avec soin pour vous offrir
          une expérience gustative unique.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
