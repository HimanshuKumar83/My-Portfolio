import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco ",
    year: " Nov'2025",
    link: "https://drive.google.com/file/d/1m4Wg85tgzH8TXfUSjXnukAVh5oDktcT-/view?usp=drive_link",
    image: "/cisco.png" // Add your screenshot path here, e.g., "/certificates/cisco-da.png"
  },
  {
    title: "Python For Data Science",
    issuer: "IBM ",
    year: "Nov'2025",
    link: "https://drive.google.com/file/d/19R9uL1Eh72DY5OyPV9h_mv2C7jt8djnD/view",
    image: "/IBM.png"
  },
  {
    title: "SQL Advanced Certificate",
    issuer: "HackerRank",
    year: "Sep'2025",
    link: "https://www.hackerrank.com/certificates/467899b9cc11",
    image: "/hackerrank.png"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "Dec'2023",
    link: "https://www.freecodecamp.org/certification/fccd0f8e33b-4fe8-43c5-9557-566635c17626/responsive-web-design",
    image: "/freecode.png"
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm sm:text-base block mb-2">04.</span>
            Certificates
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Certificate Image Placeholder */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted flex items-center justify-center border-b border-border">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                      <Award className="text-primary/30 mb-2" size={48} />
                      <p className="text-xs font-mono text-primary/40 uppercase tracking-widest text-center">
                        Placeholder: Add Screenshot Here
                      </p>
                      <div className="absolute inset-0 border-[12px] border-primary/5 m-4" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-primary shrink-0" size={18} />
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg sm:text-xl line-clamp-1">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground pl-7">
                    {cert.issuer} • <span className="text-primary/80 font-medium">{cert.year}</span>
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
