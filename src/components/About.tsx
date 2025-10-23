import pro1 from "@/assets/about/pro-1.jpeg";
import pro2 from "@/assets/about/pro-2.jpeg";
import pro3 from "@/assets/about/pro-3.jpeg";
import pro4 from "@/assets/about/pro-4.jpeg";
import pro5 from "@/assets/about/pro-5.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* WHO ARE WE Typography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image */}
          <div className="lg:col-span-3 animate-fade-in">
            <img
              src={pro1}
              alt="About Project 1"
              loading="lazy"
              className="w-full h-[400px] md:h-[600px] object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 space-y-10">
            {/* WHO */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-white mb-8">
                WHO
              </h2>
            </div>

            {/* Center Image with Text Overlay */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={pro2}
                alt="About Project 2"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              />
              <div className="absolute inset-0 bg-black/50 rounded-[2rem] flex items-center justify-center p-8">
                <p className="text-gray-200 text-center text-[13px] sm:text-sm md:text-base font-inter leading-relaxed max-w-md">
                  We are a Kuwait-based, full-service interior construction company
                  specializing in precision craftsmanship, innovative design, and
                  complete project delivery.
                </p>
              </div>
            </div>

            {/* ARE */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-white">
                ARE
              </h2>
            </div>

            {/* Bottom Image with Text */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src={pro3}
                alt="About Project 3"
                loading="lazy"
                className="w-full h-[250px] md:h-[350px] object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[2rem] flex items-end p-6 md:p-8">
                <p className="text-gray-200 text-[13px] sm:text-sm md:text-base leading-relaxed">
                  With over 15 years of experience, 200+ skilled professionals, and
                  2,000 sqm of dedicated facilities, we transform visions into reality.
                </p>
              </div>
            </div>

            {/* WE */}
            <div
              className="text-center opacity-90 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-extralight tracking-[0.2em] text-white">
                WE
              </h2>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-3 space-y-8">
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src={pro4}
                alt="About Project 4"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src={pro5}
                alt="About Project 5"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
