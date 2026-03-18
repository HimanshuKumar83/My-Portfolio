import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  { title: "Data Analytics Essentials", issuer: "Cisco ", year: " Nov'2025", link: "https://drive.google.com/file/d/1m4Wg85tgzH8TXfUSjXnukAVh5oDktcT-/view?usp=drive_link" },
  { title: "Python For Data Science", issuer: "IBM ", year: "Nov'2025", link: "https://drive.google.com/file/d/19R9uL1Eh72DY5OyPV9h_mv2C7jt8djnD/view" },
  { title: "SQL Advanced Certificate", issuer: "HackerRank", year: "Sep'2025", link: "https://www.hackerrank.com/certificates/467899b9cc11" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "Dec'2023", link: "https://www.freecodecamp.org/certification/fccd0f8e33b-4fe8-43c5-9557-566635c17626/responsive-web-design" },
];

const CertificatesSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-base block mb-2">04.</span>
            Certificates
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-all duration-300"
              >
                <Award className="text-primary mt-1 shrink-0" size={20} />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-base text-muted-foreground mt-1">{cert.issuer} • {cert.year}</p>
                </div>
                <ExternalLink className="text-muted-foreground/50 group-hover:text-primary shrink-0 mt-1 transition-colors" size={14} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
