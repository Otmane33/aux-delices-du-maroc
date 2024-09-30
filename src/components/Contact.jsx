import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img
                src="/assets/images/4.webp"
                alt="Intérieur du restaurant Aux Délices du Maroc"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -top-6 -right-6 bg-spice text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-lg">Ouvert 6j/7</p>
                <p>Venez nous rencontrer !</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-spice mb-6 leading-tight">
              Contactez <span className="text-olive">Nous</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Nous sommes à votre disposition pour répondre à toutes vos
              questions. N'hésitez pas à nous contacter pour plus d'informations
              sur nos services, nos menus ou pour toute demande spéciale.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-sand-light p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-spice"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-spice">Adresse</h3>
                  <p>268 Bd Henri Barbusse, 91210 Draveil</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-sand-light p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-spice"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-spice">Téléphone</h3>
                  <p>01 69 48 79 48</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-sand-light p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-spice"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-spice">Email</h3>
                  <p>restaurantauxdelicesdumaroc@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
