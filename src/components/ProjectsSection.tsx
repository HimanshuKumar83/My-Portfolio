import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Plant-Doctor (Crop Disease Prediction and Management System)",
    description: "An AI-based crop disease system with auto-location, real-time weather risk analysis, and an interactive Streamlit interface to deliver accurate diagnosis and personalized treatment recommendation.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Medical AI"],
    github: "https://github.com/HimanshuKumar83/Plant-Doctor",
    demo: "https://drive.google.com/file/d/1tW6eSkr4UVCp4dDYBwu1LSiOhAzkypfO/view?usp=sharing",
    src: "/plant-doctor.png",
  },
  {
    title: "Brainstorm Connect (Web Platform for Community,Club & College)",
    description: "A dynamic web platform designed to foster seamless interaction and collaboration among communities, clubs, and colleges.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI"],
    github: "https://github.com/HimanshuKumar83/CampusConnect",
    demo: "https://campus-connect-six-livid.vercel.app/",
    src: "/campusconnect.png",
  },
  {
    title: "MindEase (Mental Health Support Platform)",
    description: "An intelligent system to analyze real-time user chat data and assess emotional well-being using NLP and machine learning techniques",
    tags: ["Python", "Machine Learning", "NLP", "Streamlit", "LLM-API"],
    github: "https://github.com/HimanshuKumar83/MindEase",
    demo: "#",
    src: "/MindEase.png",
  },
  {
    title: "HealthGPT (Medical AI Assistant)",
    description: "A next generation AI healthcare assistant that integrates RAG with GEN AI to deliver trustworthy medical guidance",
    tags: ["RAG", "GEN AI", "LLM", "LangChain", "Llama Index"],
    github: "https://github.com/HimanshuKumar83/HealthGPT",
    demo: "#",
    src: "/HealthGPT.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm sm:text-base block mb-2">03.</span>
            Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg border border-border bg-card hover:border-primary/40 hover:box-glow transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="w-full h-64 md:h-72 overflow-hidden bg-muted/30">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm sm:text-base py-1 px-3 border-primary/30 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
