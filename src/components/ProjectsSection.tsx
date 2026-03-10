import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Image Classification with CNNs",
    description: "Built a convolutional neural network to classify medical images with 95%+ accuracy using transfer learning on ResNet50.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Medical AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    description: "Fine-tuned a BERT transformer model for multi-class sentiment analysis on customer reviews with real-time inference API.",
    tags: ["NLP", "Transformers", "BERT", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Stock Price Predictor",
    description: "Developed an LSTM-based time series forecasting model to predict stock prices with feature engineering on financial data.",
    tags: ["LSTM", "Time Series", "Pandas", "TensorFlow"],
    github: "#",
  },
  {
    title: "Object Detection System",
    description: "Implemented YOLOv8 for real-time object detection and tracking in video streams, deployed using Docker containers.",
    tags: ["YOLO", "Computer Vision", "Docker", "OpenCV"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm block mb-2">03.</span>
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
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 hover:box-glow transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-primary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
