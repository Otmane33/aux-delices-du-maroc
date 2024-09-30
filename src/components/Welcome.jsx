import React from "react";
const scrollToMenu = (e) => {
  e.preventDefault();
  const menuElement = document.getElementById("menu");
  if (menuElement) {
    menuElement.scrollIntoView({ behavior: "smooth" });
  }
};
const Welcome = () => {
  return (
    <section id="accueil" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-spice mb-6 leading-tight">
              Bienvenue chez <br />
              <span className="text-olive">Aux Délices du Maroc</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Découvrez l'authenticité de la cuisine marocaine au cœur de
              Draveil. Nos plats savoureux vous transporteront directement au
              Maroc, dans une ambiance chaleureuse et conviviale.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Que vous soyez amateur de couscous, de tajines ou de pâtisseries
              orientales, notre chef et son équipe sauront éveiller vos papilles
              avec des recettes traditionnelles et des créations modernes
              inspirées de la richesse culinaire marocaine.
            </p>
            <button
              onClick={scrollToMenu}
              className="bg-spice hover:bg-spice-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
            >
              Découvrir Notre Menu
            </button>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/assets/images/3.webp"
                alt="Pastilla au poulet et aux amandes"
                className="w-full object-cover h-[400px] lg:h-[500px] transition duration-300 hover:scale-105"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-spice">
              <h3 className="text-2xl font-semibold text-spice mb-3">
                Nos Horaires
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-700">Lundi - Jeudi</p>
                  <p className="text-gray-600">12h - 14h30 | 19h - 22h30</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">
                    Vendredi - Dimanche
                  </p>
                  <p className="text-gray-600">12h - 15h | 19h - 23h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
