import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "C++"],
  },
  {
    title: "ML / DL Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Hugging Face"],
  },
  {
    title: "Data & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "GCP", "Jupyter", "MLflow"],
  },
  {
    title: "Concepts",
    skills: ["CNNs", "RNNs", "Transformers", "GANs", "NLP", "Computer Vision", "Reinforcement Learning"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm block mb-2">02.</span>
            Skills & Tech Stack
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-mono text-primary text-sm font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
