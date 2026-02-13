import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Inicio", id: "hero" },
    { label: "Nosotros", id: "about" },
    { label: "Beneficios", id: "benefits" },
    { label: "Testimonios", id: "testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img style={{ height: "50px" }} src="logo-insa.png" />
            <span className="text-2xl font-bold text-primary-700">INSA</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contacto
            </button>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-primary-700 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setIsMenuOpen(false);
              }}
              className="block w-full bg-secondary-600 hover:bg-secondary-700 text-white font-bold px-6 py-2 rounded-full transition-all"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
