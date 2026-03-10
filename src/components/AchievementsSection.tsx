import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Kaggle Competition – Top 5%", description: "Achieved top 5% ranking in a Kaggle image classification competition." },
  { icon: Star, title: "Research Paper Published", description: "Co-authored a paper on attention mechanisms in medical imaging, published in IEEE." },
  { icon: Target, title: "Hackathon Winner", description: "Won 1st place at a national-level AI hackathon with an NLP-based solution." },
  { icon: Zap, title: "Open Source Contributor", description: "Active contributor to popular ML libraries with 50+ merged pull requests." },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm block mb-2">06.</span>
            Achievements
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300"
              >
                <item.icon className="text-primary mb-3" size={24} />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
