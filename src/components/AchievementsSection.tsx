import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Kaggle Competition – Top 30%",
    description: "Achieved a top 30% ranking in a Kaggle image classification competition."
  },
  {
    icon: Star,
    title: "AI for Bharat – Top 3 (North India Zone)",
    description: "Secured a Top 3 position in the North India zone in the AI for Bharat competition by developing innovative AI-based solutions addressing real-world challenges."
  },
  {
    icon: Target,
    title: "Gold Badge",
    description: "Earned a Gold Badge in Python and C++ on the HackerRank platform."
  },
  {
    icon: Zap,
    title: "Open Source Contributor",
    description: "Active contributor to machine learning libraries with 50+ merged pull requests."
  }
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
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-base text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* DSA & Problem Solving Stats */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">
              DSA & Problem Solving
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">180+</div>
                <p className="text-base font-medium text-muted-foreground">LeetCode Solved</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <p className="text-base font-medium text-muted-foreground">GFG Solved</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-base font-medium text-muted-foreground">HackerRank</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300"
              >
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-base font-medium text-muted-foreground">Projects Made</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="rounded-lg border border-border bg-card p-6 text-center hover:border-primary/50 hover:box-glow transition-all duration-300 col-span-2 md:col-span-1"
              >
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-base font-medium text-muted-foreground">Open Source PRs</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
