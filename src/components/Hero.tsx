import { ArrowRight, Play } from "lucide-react";
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6 font-light">
          Since 2009
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-6 tracking-tight">
          The Comfort of
          <br />
          <span className="text-gold font-light">Luxury</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Premier turnkey interior contracting in Kuwait. Crafting exceptional spaces
          with precision, elegance, and uncompromising quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="gradient-gold text-black font-medium hover:opacity-90 transition-opacity shadow-elegant px-8"
          >
            Request Quote
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black transition-all"
          >
            <Play className="mr-2" size={20} />
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
