import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4">
              <span className="text-foreground">DANA AL BAHAR</span>
              <br />
              <span className="text-gold">CONSTRUCTION</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              The Comfort of Luxury since 2009
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover-gold">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover-gold">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Turnkey Interior Contracting</li>
              <li>Carpentry & Joinery</li>
              <li>Gypsum Works</li>
              <li>MEP Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all hover-scale"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Dana Al Bahar Construction Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
