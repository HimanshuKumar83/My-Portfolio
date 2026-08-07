import { motion } from "framer-motion";
import { Brain, Code, Database, Cpu } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Deep Learning" },
  { icon: Code, label: "Python & ML" },
  { icon: Database, label: "Data Science" },
  { icon: Cpu, label: "Model Deployment" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm sm:text-base block mb-2">01.</span>
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
                I’m Himanshu Kumar, a Computer Science student and aspiring AI/ML engineer with hands-on experience building end-to-end solutions in healthcare AI, computer vision, and full-stack development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
                My recent work includes a RAG-based health assistant grounded in WHO-verified data, a CNN-based plant disease detection platform, and a community web platform for clubs and organizations.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I enjoy turning real-world problems into practical products using Python, React, FastAPI, MongoDB, and modern ML tools such as TensorFlow, PyTorch, and LangChain.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300"
                >
                  <item.icon className="mx-auto mb-3 text-primary" size={24} />
                  <p className="text-base sm:text-lg font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
