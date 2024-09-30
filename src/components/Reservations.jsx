import React from "react";

const Reservations = () => {
  return (
    <section id="reservations" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-spice mb-6 leading-tight">
              Réservez Votre <span className="text-olive">Table</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Pour une expérience culinaire inoubliable, réservez votre table
              chez Aux Délices du Maroc. Que ce soit pour un dîner romantique,
              un repas d'affaires ou une célébration en famille, nous sommes
              impatients de vous accueillir.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spice"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spice"
                />
                <input
                  type="date"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spice"
                />
                <input
                  type="number"
                  placeholder="Nombre de personnes"
                  min="1"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spice"
                />
              </div>
              <textarea
                placeholder="Message spécial (optionnel)"
                rows="4"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spice"
              ></textarea>
              <button
                type="submit"
                className="bg-spice hover:bg-spice-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
              >
                Réserver Maintenant
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/assets/images/5.webp"
                alt="Plat marocain savoureux"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-spice font-semibold">Cuisine authentique</p>
                <p className="text-gray-600">Une expérience unique à Draveil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
