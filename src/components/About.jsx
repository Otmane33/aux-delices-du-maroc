import React from "react";

const About = () => {
  return (
    <section id="propos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img
                src="/assets/images/8.webp"
                alt="Chef Karim Benali préparant un plat"
                className="rounded-lg shadow-2xl w-full object-cover h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-spice text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-lg">25 ans d'expérience</p>
                <p>Cuisine authentique marocaine</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-spice mb-6 leading-tight">
              À Propos de{" "}
              <span className="text-olive">Aux Délices du Maroc</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Aux Délices du Maroc est né de la passion de la famille Rafiki
              pour la cuisine marocaine authentique. Depuis 2022, nous
              partageons avec nos clients les saveurs, les parfums et la
              convivialité de notre pays d'origine.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Notre chef, Nabil Rafiki, fort de ses 25 années d'expérience,
              sélectionne avec soin les meilleurs produits locaux et les épices
              importées directement du Maroc pour vous offrir une expérience
              culinaire inoubliable.
            </p>
            <div className="bg-sand-light p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-spice mb-3">
                Notre Engagement
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ingrédients frais et de qualité</li>
                <li>Recettes traditionnelles authentiques</li>
                <li>Service chaleureux et attentionné</li>
                <li>Ambiance conviviale et dépaysante</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
