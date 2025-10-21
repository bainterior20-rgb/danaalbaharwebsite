import {
  Hammer,
  PaintBucket,
  Wrench,
  Box,
  Home,
  Lightbulb,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Interior Construction",
      description: "Turnkey fitout solutions delivering exceptional craftsmanship from concept to completion.",
      variant: "gold" as const,
    },
    {
      icon: PaintBucket,
      title: "Gypsum Construction",
      description: "Precision gypsum work including walls, ceilings, and decorative architectural elements.",
      variant: "white" as const,
    },
    {
      icon: Box,
      title: "3D & Architecture",
      description: "Photorealistic 3D modeling and architectural visualization services.",
      variant: "white" as const,
    },
    {
      icon: Wrench,
      title: "VIP Fit Out",
      description: "Exclusive, high-end interior execution for discerning clients seeking perfection.",
      variant: "gold" as const,
    },
    {
      icon: Home,
      title: "3D Rendering",
      description: "Lifelike visual representations that bring your vision to clarity before construction begins.",
      variant: "white" as const,
    },
    {
      icon: Lightbulb,
      title: "Designs That Speak Before They're Built",
      description: "Transform ideas into stunning visual realities through advanced rendering technology.",
      variant: "dark" as const,
    },
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-6xl lg:text-8xl font-playfair font-extralight tracking-[0.2em] text-foreground uppercase leading-tight">
            SERVI<br />CES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGold = service.variant === "gold";
            const isWhite = service.variant === "white";
            const isDark = service.variant === "dark";

            return (
              <div
                key={index}
                className={`
                  relative group p-8 rounded-[2rem] transition-all hover-lift hover-glow
                  animate-fade-in
                  ${isGold ? "bg-gold text-black" : ""}
                  ${isWhite ? "bg-off-white text-black" : ""}
                  ${isDark ? "bg-charcoal border-2 border-gold/20 text-foreground" : ""}
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-full mb-6 flex items-center justify-center
                  ${isGold ? "bg-black/10" : ""}
                  ${isWhite ? "bg-gold/20" : ""}
                  ${isDark ? "bg-gold/10 border border-gold/30" : ""}
                `}>
                  <Icon 
                    className={`
                      ${isGold || isWhite ? "text-black" : "text-gold"}
                    `}
                    size={28} 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Content */}
                <h3 className={`
                  text-xl font-playfair font-semibold mb-4 tracking-wide
                  ${isDark ? "text-foreground" : "text-black"}
                `}>
                  {service.title}
                </h3>
                <p className={`
                  text-sm font-inter leading-relaxed
                  ${isGold ? "text-black/80" : ""}
                  ${isWhite ? "text-black/70" : ""}
                  ${isDark ? "text-muted-foreground" : ""}
                `}>
                  {service.description}
                </p>

                {/* Decorative Quote Icon for Dark Card */}
                {isDark && (
                  <div className="absolute top-8 right-8 text-gold/20 text-6xl font-serif">
                    "
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
