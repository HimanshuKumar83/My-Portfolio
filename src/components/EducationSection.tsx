import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Lovely Professional University",
    year: "2023 – Present",
    details: "Specialization in AI & Machine Learning. CGPA: 7.95/10",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "National College Barauli",
    year: "2019 – 2021",
    details: "Science stream with Mathematics. Score: 77.8%",
  },
  {
    degree: "Secondary (10th)",
    school: "S.S Public School",
    year: "2019",
    details: "Score: 86%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm sm:text-base block mb-2">05.</span>
            Education
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="relative shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                      <GraduationCap className="text-primary" size={18} />
                    </div>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-5 flex-1">
                    <p className="font-mono text-sm text-primary mb-1">{edu.year}</p>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground">{edu.school}</p>
                    <p className="text-base text-muted-foreground/70 mt-2">{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
