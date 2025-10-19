import { Award, Users, Building2 } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building2, value: "15+", label: "Years Experience" },
    { icon: Users, value: "200+", label: "Professionals" },
    { icon: Award, value: "2000", label: "SQM Facilities" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Crafting Excellence
              <br />
              <span className="text-gold">Since 2009</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dana Al Bahar Construction Company stands as Kuwait's premier luxury interior
              fitout specialist. With over 15 years of expertise, we deliver turnkey solutions
              that transform spaces into timeless masterpieces.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive services encompass carpentry, gypsum works, renovation, MEP
              installations, and bespoke joinery. With a team of 200+ skilled professionals and
              state-of-the-art 2000 sqm facilities, we bring architectural visions to life.
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-gold pl-4">
                <h3 className="text-gold font-medium mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising standards in every detail
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <h3 className="text-gold font-medium mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Building lasting relationships through integrity
                </p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <h3 className="text-gold font-medium mb-2">Elegance</h3>
                <p className="text-sm text-muted-foreground">
                  Sophistication woven into every project
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-gold/20 rounded-lg p-8 shadow-card hover:shadow-elegant transition-all hover-scale"
              >
                <stat.icon className="text-gold mb-4" size={40} />
                <div className="text-4xl font-light text-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
