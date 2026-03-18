import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container max-w-none relative z-10 mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left pt-12 lg:pt-0"
          >
            <p className="font-mono text-xl md:text-2xl text-primary mb-4">Hello, I'm</p>
            <h1 className="text-7xl md:text-9xl lg:text-[7rem] font-bold mb-6 tracking-tight">
              <motion.span
                className="gradient-text inline-block"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {"Himanshu Kumar".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <p className="text-4xl md:text-5xl text-muted-foreground mb-6 font-medium">
              Aspiring Machine Learning Engineer
            </p>
            <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground/80 mb-10 leading-relaxed text-2xl md:text-3xl">
              Passionate about building intelligent systems that solve real-world problems using deep learning, NLP, and computer vision.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 mb-10">
              <Button asChild size="lg" className="hover:scale-105 transition-transform text-lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary hover:text-primary transition-all text-lg">
                <a href="/finalcvhimanshu123456.pdf" download>Download Resume</a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <a href="https://github.com/HimanshuKumar83" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                <Github size={26} />
              </a>
              <a href="https://www.linkedin.com/in/himanshukumar011/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                <Linkedin size={26} />
              </a>
              <a href="https://leetcode.com/u/Himanshu8320/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className="w-[26px] h-[26px]" alt="LeetCode" />
              </a>
              <a href="mailto:himanshukumarsingh454@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                <Mail size={26} />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="flex justify-center items-center py-10 lg:py-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Outer rotating gradient frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-[spin_6s_linear_infinite] opacity-75 group-hover:opacity-100 transition-opacity blur-[2px] p-1" />
              {/* Pulsing glow layer */}
              <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse blur-xl" />
              
              {/* Inner Photo Container */}
              <div className="absolute inset-[3px] rounded-full bg-card overflow-hidden flex items-center justify-center border-4 border-background z-10">
                <img
                  src="/profile.png"
                  alt="Himanshu Kumar Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative badges */}
              <motion.div 
                className="absolute top-4 -right-4 bg-card border border-primary/50 text-primary px-4 py-2 rounded-full text-sm font-mono font-semibold z-20 shadow-lg shadow-primary/20 backdrop-blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ML Engineer
              </motion.div>
              <motion.div 
                className="absolute bottom-10 -left-6 bg-card border border-accent/50 text-accent px-4 py-2 rounded-full text-sm font-mono font-semibold z-20 shadow-lg shadow-accent/20 backdrop-blur-md"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Python Dev
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground/50" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
