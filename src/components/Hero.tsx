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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury Interior by Dana Al Bahar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-gold-matte text-[10px] uppercase tracking-[0.5em] mb-8 font-inter font-light">
              Since 2009
            </p>
            
            <h1 className="mb-12">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-inter font-extralight tracking-tight leading-none mb-2">
                LIGHT. SPACE
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-inter font-extralight tracking-tight leading-none">
                ATMOSPHERE.
              </span>
            </h1>

            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white hover:bg-off-white text-black font-poppins font-medium transition-all px-8 py-6 text-sm rounded-full uppercase tracking-wider group"
            >
              Request A Quote
              <div className="ml-3 w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-gold transition-colors">
                <ArrowRight size={16} className="text-white" />
              </div>
            </Button>
          </div>

          {/* Right Side - Circular Badge */}
          <div className="hidden lg:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gold/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center shadow-gold-glow">
                <p className="text-black text-xs uppercase tracking-[0.3em] mb-4 font-inter font-semibold">
                  Before Realistic
                </p>
                <p className="text-black text-2xl font-playfair font-semibold mb-2">
                  Visualizations
                </p>
                <p className="text-black text-xs uppercase tracking-[0.2em] mb-4 font-inter">
                  Let us showcase
                </p>
                <p className="text-black text-xs font-inter font-light leading-relaxed">
                  your ideas before<br />they're built
                </p>
                
                {/* Decorative dots */}
                <div className="flex gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-black/30"></div>
                  <div className="w-2 h-2 rounded-full bg-black/60"></div>
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
          <ChevronDown className="text-gold" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
