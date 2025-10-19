import { Search, Clipboard, Cog, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Brief",
      description: "We understand your vision, requirements, and design aspirations in detail",
    },
    {
      icon: Clipboard,
      title: "Concept & Planning",
      description: "Our team creates comprehensive plans, 3D designs, and project timelines",
    },
    {
      icon: Cog,
      title: "Execution",
      description: "Expert craftsmen bring your vision to life with precision and care",
    },
    {
      icon: CheckCircle,
      title: "Delivery & Review",
      description: "Final inspection ensures every detail meets our exacting standards",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined approach ensures exceptional results from concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-dark border-2 border-gold/30 flex items-center justify-center hover:border-gold transition-all hover-scale shadow-elegant">
                  <step.icon className="text-gold" size={40} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-gold text-black flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-light mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
