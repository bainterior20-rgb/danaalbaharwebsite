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
    { image: project1, title: "Luxury Villa Living Room", location: "Salmiya" },
    { image: project2, title: "Modern Kitchen Design", location: "Jabriya" },
    { image: project3, title: "Executive Office Suite", location: "Kuwait City" },
    { image: project4, title: "Hotel Lobby Interior", location: "Fintas" },
    { image: project5, title: "Premium Bathroom Fitout", location: "Mishref" },
    { image: project6, title: "Elegant Dining Space", location: "Salwa" },
  ];

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4 font-light">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Our <span className="text-gold">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of luxury interior transformations across Kuwait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-light mb-2">{project.title}</h3>
                  <p className="text-gold text-sm uppercase tracking-wider">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Project"
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
        </div>
      )}
    </>
  );
};

export default Projects;
