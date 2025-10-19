import { Hammer, Sofa, Building, Wrench, PaintBucket, Zap, Lightbulb, Layers, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Carpentry Works",
      description: "Custom woodwork crafted with precision and artistry",
    },
    {
      icon: Sofa,
      title: "Furniture Works",
      description: "Bespoke furniture design and manufacturing",
    },
    {
      icon: Building,
      title: "Turnkey Interior Contracting",
      description: "Complete interior solutions from concept to completion",
    },
    {
      icon: Wrench,
      title: "Joinery Works",
      description: "Premium joinery for sophisticated interiors",
    },
    {
      icon: PaintBucket,
      title: "Gypsum & Special Painting",
      description: "Elegant ceiling systems and decorative finishes",
    },
    {
      icon: Zap,
      title: "MEP Works",
      description: "Advanced mechanical, electrical & plumbing systems",
    },
    {
      icon: Lightbulb,
      title: "Light Fitting",
      description: "Designer lighting installations for ambiance",
    },
    {
      icon: Layers,
      title: "3D & 2D Design",
      description: "Comprehensive design visualization services",
    },
    {
      icon: FileText,
      title: "BOQ Analysis",
      description: "Detailed cost estimation and project planning",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Premium <span className="text-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior solutions delivered with excellence and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-gold/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon
                className="text-gold mb-4 transition-transform group-hover:scale-110"
                size={40}
              />
              <h3 className="text-xl font-light mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
