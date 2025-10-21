import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury Interior by Dana Al Bahar" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <p className="text-gold-matte text-xs uppercase tracking-[0.4em] mb-8 font-inter font-light">Since 2009</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-semibold mb-8 tracking-tight leading-[0.95] uppercase">
          The Comfort of<br /><span className="text-gold italic">Luxury</span>
        </h1>
        <p className="text-base md:text-lg text-off-white/80 max-w-3xl mx-auto mb-14 font-inter font-light leading-relaxed">
          Premier turnkey interior contracting in Kuwait. Crafting exceptional spaces with precision, elegance, and uncompromising quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-gold hover:bg-gold-matte text-black font-medium transition-all hover:shadow-gold-glow px-10 py-6 text-base rounded-full font-poppins uppercase tracking-wider">
            Request Quote<ArrowRight className="ml-2" size={20} />
          </Button>
          <Button onClick={() => scrollToSection("projects")} size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold/10 transition-all px-10 py-6 text-base rounded-full font-poppins uppercase tracking-wider">
            View Projects
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center">
          <ChevronDown className="text-gold" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
