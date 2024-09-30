import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Accueil", href: "accueil" },
    { name: "Menu", href: "menu" },
    { name: "Galerie", href: "galerie" },
    { name: "À Propos", href: "propos" },
    { name: "Réservations", href: "reservations" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.href)
      );
      const scrollPosition = window.scrollY + 100; // Adding offset for better accuracy

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-spice shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-white px-3 py-2 rounded-md transition duration-300 text-sm uppercase tracking-wider ${
                  activeSection === item.href
                    ? "bg-spice-dark"
                    : "hover:bg-spice-dark"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-spice-dark rounded-md overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 px-4 text-white transition duration-300 text-sm uppercase tracking-wider ${
                  activeSection === item.href ? "bg-spice" : "hover:bg-spice"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
