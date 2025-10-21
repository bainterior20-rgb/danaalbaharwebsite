const About = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* WHO ARE WE Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <div className="lg:col-span-3 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800"
              alt="Modern Kitchen Interior"
              className="w-full h-[600px] object-cover rounded-[2rem] shadow-card"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* WHO */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-foreground mb-8">
                WHO
              </h2>
            </div>

            {/* Center Image with Text Overlay */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
                alt="Luxury Living Room"
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-card"
              />
              <div className="absolute inset-0 bg-black/40 rounded-[2rem] flex items-center justify-center p-8">
                <p className="text-off-white text-center text-sm font-inter leading-relaxed max-w-md">
                  We are a Kuwait-based, full-service interior construction company specializing in precision craftsmanship, innovative design, and complete project delivery.
                </p>
              </div>
            </div>

            {/* ARE */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-foreground">
                ARE
              </h2>
            </div>

            {/* Bottom Image with Text */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
                alt="Modern Bedroom"
                className="w-full h-[350px] object-cover rounded-[2rem] shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[2rem] flex items-end p-8">
                <p className="text-off-white text-sm font-inter leading-relaxed">
                  With over 15 years of experience, 200+ skilled professionals, and 2,000 sqm of dedicated facilities, we transform visions into reality.
                </p>
              </div>
            </div>

            {/* WE */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-foreground">
                WE
              </h2>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-3 space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
                alt="Contemporary Interior"
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-card"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                alt="Elegant Design"
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
