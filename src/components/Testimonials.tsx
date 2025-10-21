import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohammed Al-Rashid",
      role: "Villa Owner",
      location: "Salmiya",
      quote:
        "Dana Al Bahar transformed our villa into a masterpiece. Their attention to detail and commitment to quality exceeded all expectations.",
    },
    {
      name: "Fatima Al-Sabah",
      role: "Business Owner",
      location: "Kuwait City",
      quote:
        "Professional, reliable, and incredibly skilled. They delivered our office renovation on time and within budget. Highly recommended.",
    },
    {
      name: "Abdullah Al-Mutawa",
      role: "Hotel Manager",
      location: "Fintas",
      quote:
        "The craftsmanship is outstanding. Dana Al Bahar brought our hotel's interior vision to life with elegance and precision.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-marble-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-gold-matte text-xs uppercase tracking-[0.4em] mb-6 font-inter font-light">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-6xl font-playfair font-semibold mb-6 uppercase">
            Client <span className="text-gold">Stories</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg font-inter">
            Hear from those who have experienced the Dana Al Bahar difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-gold/10 rounded-atmo p-10 shadow-card hover:shadow-gold-glow transition-all duration-500 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" size={48} strokeWidth={1.5} />
              <p className="text-muted-foreground mb-8 leading-relaxed italic font-inter text-lg">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gold/20 pt-6">
                <p className="font-poppins font-semibold text-gold-matte">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-inter mt-1">
                  {testimonial.role}
                </p>
                <p className="text-xs text-gold uppercase tracking-wider font-poppins mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
