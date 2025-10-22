import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-black"
    >
      {/* === Background Image (behind panels) === */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover brightness-[0.55] contrast-110"
        />
      </div>

      {/* === 4 Vertical Panels === */}
      <div className="absolute inset-0 flex justify-center items-end gap-[1%] px-[6%] md:px-[8%] lg:px-[10%] z-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative w-[22%] h-[85%] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Each slice of the same image */}
            <img
              src={heroBg}
              alt={`panel-${i}`}
              className="w-full h-full object-cover object-center"
              style={{
                objectPosition: `${i * 33.3}% center`,
              }}
            />
            {/* Bottom Curved Shape */}
            <div className="absolute bottom-[-1px] left-0 w-full h-[130px] overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  fill="#0A0A0A"
                  d="M0,260 C200,300 1240,300 1440,260 L1440,320 L0,320 Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* === Bottom Section (Marble Texture) === */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 220"
            className="w-full h-[160px] md:h-[220px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#0A0A0A"
              d="M0,180L80,170.7C160,161,320,143,480,137.3C640,132,800,140,960,150.7C1120,161,1280,175,1360,182.7L1440,190V220H0Z"
            ></path>
          </svg>
          <div className="absolute inset-0 bg-[url('@/assets/marble-texture.jpg')] bg-cover bg-center opacity-[0.07]" />
        </div>
      </div>

      {/* === Text Content === */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pb-24 md:pb-40">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* === Left Text Section === */}
          <div className="text-left text-white animate-fade-in-up">
            <p className="text-[#C5A15E] uppercase tracking-[0.4em] text-xs mb-6">
              Since 2009
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-[6.2rem] leading-[1.05] font-light mb-6">
              LIGHT. <span className="text-[#C5A15E]">SPACE.</span>
              <br />
              ATMOSPHERE.
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-10">
              Photorealistic visualizations that showcase your ideas before
              they’re built. We craft elegant, atmospheric designs for interiors
              that inspire emotion and comfort.
            </p>

            <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm tracking-wider flex items-center gap-2 hover:bg-gray-100 transition-all duration-300">
              Request a Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
