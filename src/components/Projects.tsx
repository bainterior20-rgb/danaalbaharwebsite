import { useState } from "react";
import { X } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: project1,
      title: "Lannister Residence",
      subtitle: "A modern sanctuary blending minimalist design with luxury finishes and natural light",
      location: "Salmiya",
    },
    {
      image: project2,
      title: "Elysium Vista",
      subtitle: "Contemporary living spaces featuring clean lines and sophisticated material palette",
      location: "Kuwait City",
    },
    {
      image: project3,
      title: "The Grand Maison",
      subtitle: "Timeless elegance meets modern comfort in this meticulously crafted residence",
      location: "Fintas",
    },
    {
      image: project4,
      title: "Serenity Villas",
      subtitle: "Coastal-inspired interiors with an emphasis on calm, neutral tones and textures",
      location: "Jabriya",
    },
    {
      image: project5,
      title: "Azure Estate",
      subtitle: "Sophisticated urban dwelling with custom millwork and curated finishes",
      location: "Shuwaikh",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-6xl lg:text-7xl font-playfair font-extralight tracking-[0.3em] text-foreground uppercase">
            Our Projects
          </h2>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-smooth" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-playfair font-semibold text-off-white mb-2 tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-off-white/80 text-sm font-inter leading-relaxed mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gold text-xs font-inter uppercase tracking-wider">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Project detail"
            className="max-w-full max-h-[90vh] object-contain rounded-[2rem] shadow-elegant"
          />
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
