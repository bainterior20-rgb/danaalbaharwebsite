import { Lightbulb, FileText, Box, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Brief",
      description: "We explore your vision, goals, and space requirements to establish a clear creative direction.",
    },
    {
      icon: FileText,
      title: "Concept & Planning",
      description: "Our designers craft comprehensive plans and architectural drawings tailored to your brief.",
    },
    {
      icon: Box,
      title: "3D Modeling & Visualization",
      description: "Experience your space before it's built through photorealistic 3D renderings and walkthroughs.",
    },
    {
      icon: Package,
      title: "Delivery & Review",
      description: "Final inspection, walkthrough, and handover of your meticulously crafted interior space.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920"
          alt="Interior workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-playfair font-extralight tracking-[0.3em] text-foreground uppercase mb-4">
            How It Works
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-[2px]">
                    <div className="w-full h-full border-t-2 border-dashed border-gold/30" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative text-center">
                  {/* Circular Icon */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center backdrop-blur-sm">
                    <Icon className="text-gold" size={40} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-inter leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
