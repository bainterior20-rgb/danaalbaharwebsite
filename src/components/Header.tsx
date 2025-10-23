import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import danaLogo from "@/assets/danalogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-black/90"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* === LOGO === */}
        <div className="flex items-center">
          <img
            src={danaLogo}
            alt="Dana Al Bahar Logo"
            className="h-[100px] md:h-[110px] lg:h-[120px] w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] cursor-pointer"
            onClick={() => scrollToSection("hero")}
          />
        </div>

        {/* === DESKTOP NAV === */}
        <nav className="hidden md:flex items-center gap-12">
          {[
            { name: "About", target: "about" },
            { name: "Services", target: "services" },
            { name: "Project", target: "projects" },
            { name: "Contact Us", target: "contact" },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="text-sm uppercase tracking-[0.25em] text-gray-200 hover:text-[#C5A15E] transition-all font-inter"
            >
              {link.name}
            </button>
          ))}

          <Button
            className="rounded-full bg-white hover:bg-gray-100 text-black font-medium tracking-wider text-sm px-8 py-3 transition-all shadow-md"
            onClick={() => scrollToSection("contact")}
          >
            Get Free Consultation
          </Button>
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#C5A15E]/20 animate-fade-in">
          <nav className="container mx-auto py-8 flex flex-col gap-6 text-center">
            {[
              { name: "About", target: "about" },
              { name: "Services", target: "services" },
              { name: "Project", target: "projects" },
              { name: "Contact Us", target: "contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="uppercase tracking-[0.25em] text-gray-300 hover:text-[#C5A15E] font-inter text-sm"
              >
                {link.name}
              </button>
            ))}

            <Button
              className="bg-white hover:bg-gray-100 text-black font-medium tracking-wider text-sm px-6 py-2 rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
