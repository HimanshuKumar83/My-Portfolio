import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, Pause, RefreshCw, Layers, ShieldAlert, HeartPulse, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "Health GPT – Context-Aware AI Health Assistant using RAG & WHO Data",
    description: "Developed a full-stack AI-powered healthcare assistant using Retrieval-Augmented Generation to answer medical queries grounded in WHO-verified documents, reducing hallucinations and improving response.",
    bulletPoints: [
      "Developed a full-stack AI-powered healthcare assistant using Retrieval-Augmented Generation to answer medical queries grounded in WHO-verified documents, reducing hallucinations and improving response.",
      "Designed a context-aware and personalized response system that adapts answers based on user profile (age, gender, habits) and detects high-risk health queries to provide safer, urgency-aware guidance.",
      "Built a React-based health assistant with chat, analytics, and intelligent AI-driven interactions."
    ],
    tags: ["Python", "React", "FastAPI", "LangChain", "ChromaDB", "SentenceTransformers", "FAISS", "Gemini 2.5 Flash", "Tailwind"],
    github: "https://github.com/HimanshuKumar83/HealthGPT",
    demo: "https://drive.google.com/file/d/1lsmOOE-sdoStSE4-6tM5dp5y_lIxAMHK/view?usp=sharing",
    src: "/HealthGPT.png",
    
  },
  {
    title: "Plant Doctor – AI Powered Plant Disease Prediction and Smart Treatment Advisor",
    description: "Developed an AI-powered web application that detects crop diseases from leaf images using a Convolutional Neural Network (CNN) and provides real-time treatment recommendations.",
    bulletPoints: [
      "Developed an AI-powered web application that detects crop diseases from leaf images using a Convolutional Neural Network (CNN) and provides real-time treatment recommendations.",
      "Implemented a hybrid recommendation engine using LLM API with an offline knowledge base fallback to ensure reliable organic and chemical treatment suggestions in English and Hindi.",
      "Built an AI-based crop disease system with auto-location, real-time weather risk analysis, and an interactive Streamlit interface to deliver accurate diagnosis and personalized treatment recommendation."
    ],
    tags: ["Python", "TensorFlow", "CNN", "Streamlit", "Fast APIs", "Open-Meteo API", "LLM API", "NumPy", "Pandas"],
    github: "https://github.com/HimanshuKumar83/Plant-Doctor",
    demo: "https://drive.google.com/file/d/1tW6eSkr4UVCp4dDYBwu1LSiOhAzkypfO/view?usp=sharing",
    src: "/plant-doctor.png"
  },
  {
    title: "Brainstorm Connect - Web platform for Community, Clubs and Organizations",
    description: "Developed a web-based platform enabling college clubs and communities to share announcements, updates, and manage memberships efficiently.",
    bulletPoints: [
      "Developed a web-based platform enabling college clubs and communities to share announcements, updates, and manage memberships efficiently.",
      "Designed and implemented RESTful APIs with secure authentication and full CRUD operations for club activities and announcements.",
      "Improved communication efficiency and increased user engagement by centralizing club management."
    ],
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"],
    github: "https://github.com/HimanshuKumar83/CampusConnect",
    demo: "https://campus-connect-six-livid.vercel.app/",
    src: "/campusconnect.png"
  }
];

const demoSteps = [
  {
    id: 1,
    title: "1. Personalization Form",
    subtitle: "Setting medical context & profile",
    duration: 5,
    description: "Health GPT collects basic details to tailor its guidelines appropriately (e.g. age, habits, existing conditions)."
  },
  {
    id: 2,
    title: "2. WHO Database Query",
    subtitle: "RAG & Vector Retrieval",
    duration: 6,
    description: "The prompt query searches through trusted, WHO-verified offline databases to retrieve verified literature matches."
  },
  {
    id: 3,
    title: "3. Personalized Guidance",
    subtitle: "Contextual responses",
    duration: 7,
    description: "AI streams an answer structured for the user's specific context, citing sources and suggesting preventive actions."
  },
  {
    id: 4,
    title: "4. Risk Detection",
    subtitle: "Urgent red flags",
    duration: 6,
    description: "When high-risk keywords (e.g. chest pain) are entered, the system bypasses AI generation to display immediate critical warning guidelines."
  }
];

const ProjectsSection = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDemoOpen && isPlaying) {
      const stepDuration = demoSteps[currentStepIndex].duration * 1000;
      const intervalTime = 100;
      
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Next step
            setCurrentStepIndex((prevStep) => (prevStep + 1) % demoSteps.length);
            return 0;
          }
          return prev + (intervalTime / stepDuration) * 1000;
        });
      }, intervalTime);
    }
    return () => clearInterval(timer);
  }, [isDemoOpen, isPlaying, currentStepIndex]);

  const handleStepSelect = (index: number) => {
    setCurrentStepIndex(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restartDemo = () => {
    setCurrentStepIndex(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm sm:text-base block mb-2">03.</span>
            Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card hover:border-primary/40 hover:box-glow transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="w-full h-52 sm:h-60 overflow-hidden bg-muted/30 relative">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.hasVideoDemo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        className="gap-2 bg-primary hover:bg-primary/95 text-white font-medium"
                        onClick={() => {
                          setIsDemoOpen(true);
                          setCurrentStepIndex(0);
                          setProgress(0);
                          setIsPlaying(true);
                        }}
                      >
                        <Play size={16} fill="white" /> Play Video Demo
                      </Button>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors min-h-[56px] line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <ul className="list-disc pl-5 text-sm sm:text-base text-muted-foreground mb-6 space-y-2 flex-1">
                    {project.bulletPoints.map((point, index) => (
                      <li key={index} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs py-0.5 px-2 border-primary/30 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                    <Button size="sm" variant="outline" asChild className="border-border hover:border-primary/40">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={15} className="mr-1.5" /> Code
                      </a>
                    </Button>
                    {project.hasVideoDemo ? (
                      <Button 
                        size="sm" 
                        variant="default"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => {
                          setIsDemoOpen(true);
                          setCurrentStepIndex(0);
                          setProgress(0);
                          setIsPlaying(true);
                        }}
                      >
                        <Play size={14} className="mr-1.5" fill="currentColor" /> Demo Video
                      </Button>
                    ) : (
                      project.demo && (
                        <Button size="sm" variant="ghost" asChild className="hover:text-primary">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={15} className="mr-1.5" /> Live Demo
                          </a>
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* HEALTH GPT INTERACTIVE DEMO MODAL */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="max-w-4xl w-[95vw] bg-card border border-border p-0 overflow-hidden rounded-xl shadow-2xl z-50">
          <DialogHeader className="p-5 border-b border-border bg-muted/30">
            <DialogTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-foreground">
              <HeartPulse className="text-primary animate-pulse" /> Health GPT - Interactive Video Demo
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-12">
            {/* Player Main Area */}
            <div className="md:col-span-8 bg-black/95 aspect-video p-6 flex flex-col justify-between relative overflow-hidden group select-none min-h-[320px]">
              
              {/* Device Mockup Shell */}
              <div className="flex-1 bg-zinc-900 border border-zinc-700/50 rounded-lg shadow-inner overflow-hidden flex flex-col">
                {/* Browser Title Bar */}
                <div className="bg-zinc-800 px-3 py-2 border-b border-zinc-700/50 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono flex-1 text-center truncate">healthgpt.ai-assistant</span>
                </div>
                
                {/* Simulated Screens */}
                <div className="flex-1 p-4 flex flex-col justify-between bg-zinc-950 font-sans text-xs">
                  <AnimatePresence mode="wait">
                    {currentStepIndex === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-center"
                      >
                        <div className="max-w-sm mx-auto bg-zinc-900 border border-zinc-800 p-4 rounded-lg space-y-3">
                          <h4 className="font-semibold text-center text-primary flex items-center justify-center gap-1">
                            <User size={14} /> Personalize Health Profile
                          </h4>
                          <p className="text-[10px] text-zinc-400 text-center">Context-aware RAG customizes advice dynamically</p>
                          <div className="space-y-2 text-[10px]">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                                <span className="text-zinc-500 block text-[8px]">Age</span>
                                <span className="text-zinc-200 font-bold">45 Years</span>
                              </div>
                              <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                                <span className="text-zinc-500 block text-[8px]">Smoke / Drink</span>
                                <span className="text-zinc-200 font-bold">No / Socially</span>
                              </div>
                            </div>
                            <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                              <span className="text-zinc-500 block text-[8px]">Medical History</span>
                              <span className="text-zinc-200 font-bold">Type 2 Diabetes, Hypertension</span>
                            </div>
                          </div>
                          <div className="bg-primary/20 text-primary border border-primary/30 p-2 rounded text-[9px] text-center font-mono">
                            Context Profile Loaded Successfully!
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStepIndex === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-center"
                      >
                        <div className="max-w-md mx-auto space-y-3">
                          <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex items-center justify-between">
                            <span className="text-zinc-200 font-mono truncate">Prompt: "Safe exercise intensity guidelines"</span>
                            <RefreshCw className="text-primary animate-spin" size={14} />
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <div className="h-1 bg-zinc-800 rounded overflow-hidden">
                              <motion.div 
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                              />
                            </div>
                            <span className="text-[10px] text-zinc-500 font-mono text-center block">Querying Vector Store: ChromaDB / WHO Guidelines...</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[8px] font-mono">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 }}
                              className="bg-zinc-900/60 p-2 rounded border border-zinc-800 text-zinc-300"
                            >
                              <Layers size={10} className="text-primary mb-1" />
                              WHO_Doc_241.pdf (Match 94%)
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.5 }}
                              className="bg-zinc-900/60 p-2 rounded border border-zinc-800 text-zinc-300"
                            >
                              <Layers size={10} className="text-accent mb-1" />
                              Diabetes_Care_Guidelines.pdf (Match 89%)
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStepIndex === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-between"
                      >
                        <div className="bg-zinc-900 p-2 rounded text-[10px] text-zinc-300 font-mono mb-2 max-w-[80%] self-end border border-zinc-800">
                          What is a safe exercise schedule for me?
                        </div>
                        <div className="bg-zinc-900/90 border border-primary/20 p-3 rounded-lg max-w-[90%] self-start space-y-2">
                          <p className="font-semibold text-primary flex items-center gap-1 text-[10px]">
                            <HeartPulse size={12} /> Health GPT (WHO Grounded):
                          </p>
                          <p className="text-zinc-300 leading-relaxed text-[10px]">
                            Based on your profile <span className="text-primary">(45yo, Type 2 Diabetes, Hypertension)</span> and WHO Section 4.2 guidelines:
                          </p>
                          <ul className="list-disc pl-4 text-zinc-400 space-y-1 text-[9px]">
                            <li>Engage in 150 min/week of moderate physical activity.</li>
                            <li>Monitor blood glucose before starting; avoid exercise if &gt;250 mg/dL.</li>
                            <li>Ensure proper hydration due to antihypertensive medication context.</li>
                          </ul>
                          <div className="pt-1.5 border-t border-zinc-800 flex justify-between text-[8px] text-zinc-500">
                            <span>Source: WHO Global Phys-Activity Report 2024</span>
                            <span className="text-green-500">✔ Grounded in WHO Data</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStepIndex === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-center"
                      >
                        <div className="max-w-md mx-auto space-y-3">
                          <div className="bg-red-950/20 border border-red-500/40 p-3 rounded-lg text-center space-y-2">
                            <div className="flex justify-center">
                              <ShieldAlert className="text-red-500 animate-bounce" size={24} />
                            </div>
                            <h4 className="font-bold text-red-400">Emergency Red-Flag Triggered</h4>
                            <p className="text-[10px] text-zinc-400 leading-relaxed">
                              User Query: *"I am experiencing heavy chest tightness, left arm pain, and cold sweats."*
                            </p>
                            <div className="bg-red-500/20 text-red-300 border border-red-500/40 p-2 rounded text-[9px] text-left">
                              <strong>CRITICAL ALERT:</strong> These symptoms are strongly associated with acute cardiac events. Please seek emergency medical care immediately (Call 911 / 102). Do not rely on AI advice.
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Player Overlay Controls */}
              <div className="w-full flex items-center gap-4 mt-3 z-10 bg-black/40 p-2 rounded backdrop-blur-sm">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-zinc-800" onClick={togglePlay}>
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                
                <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-zinc-800" onClick={restartDemo}>
                  <RefreshCw size={14} />
                </Button>

                {/* Progress bar */}
                <div className="flex-1 h-1.5 bg-zinc-800 rounded overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
                </div>
                
                <span className="text-[10px] font-mono text-zinc-400">
                  Scene {currentStepIndex + 1}/4
                </span>
              </div>
            </div>

            {/* Sidebar Descriptions */}
            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-border p-5 bg-muted/20 flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-widest">
                  Demo Walkthrough
                </h4>
                
                <div className="space-y-2">
                  {demoSteps.map((step, idx) => (
                    <button
                      key={step.id}
                      onClick={() => handleStepSelect(idx)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        currentStepIndex === idx
                          ? "bg-primary/10 border-primary text-foreground shadow-sm"
                          : "bg-transparent border-transparent text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <div className="font-semibold text-sm">{step.title}</div>
                      <div className="text-xs font-mono text-primary/80 mb-1">{step.subtitle}</div>
                      {currentStepIndex === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs text-muted-foreground mt-2 leading-relaxed"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60">
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  💡 <strong>Tip:</strong> Click any of the steps above to inspect the specific feature in the simulator. Use Play/Pause to control the guide.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
