import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohammed Al-Rashid",
      role: "Villa Owner, Salmiya",
      quote:
        "Dana Al Bahar transformed our villa into a masterpiece. Their attention to detail and commitment to quality exceeded all expectations.",
    },
    {
      name: "Fatima Al-Sabah",
      role: "Business Owner, Kuwait City",
      quote:
        "Professional, reliable, and incredibly skilled. They delivered our office renovation on time and within budget. Highly recommended.",
    },
    {
      name: "Abdullah Al-Mutawa",
      role: "Hotel Manager, Fintas",
      quote:
        "The craftsmanship is outstanding. Dana Al Bahar brought our hotel's interior vision to life with elegance and precision.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Client <span className="text-gold">Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced the Dana Al Bahar difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-gold/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-gold/30 mb-4" size={40} />
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gold/20 pt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
