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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-base block mb-2">01.</span>
            About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm an aspiring Machine Learning Engineer with a strong foundation in mathematics, statistics, and programming. I'm passionate about leveraging AI to create innovative solutions that make a meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in ML began with a curiosity about how machines can learn from data and make intelligent decisions. Since then, I've been continuously learning and building projects that span across computer vision, natural language processing, and predictive analytics.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly exploring cutting-edge research papers and implementing state-of-the-art models to stay at the forefront of this rapidly evolving field.
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
                  <item.icon className="mx-auto mb-3 text-primary" size={28} />
                  <p className="text-lg font-medium text-foreground">{item.label}</p>
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
