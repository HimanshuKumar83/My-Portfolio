import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
};

const INITIAL_MESSAGE: Message = {
  id: '0',
  text: "Hello! I'm Himanshu's virtual assistant. I can help recruiters quickly find information about his skills, projects, and contact details. Ask me anything!",
  sender: 'bot',
};

const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
    return "Himanshu's core tech stack includes Python (PyTorch, TensorFlow, Scikit-learn), JavaScript (React, Node.js), and databases like MongoDB and SQL. He also works with tools like Docker, Git, and Linux.";
  }

  if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('build')) {
    return "Himanshu has built several impressive projects: 'Plant-Doctor' (Crop Disease Prediction), 'Brainstorm Connect' (Campus Collaboration Platform), 'MindEase' (Mental Health Support), and 'HealthGPT' (Medical AI Assistant). You can see the full details in the Projects section!";
  }

  if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
    return "Himanshu is an aspiring Machine Learning Engineer currently pursuing his B.Tech at LPU. He has built end-to-end ML projects involving CNNs, NLP, and RAG, demonstrating strong practical knowledge in AI and Software Development.";
  }

  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
    return "You can reach Himanshu directly via email at himanshukumarsingh454@gmail.com or connect with him on LinkedIn. Both links are available in the Contact section at the bottom.";
  }

  if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('study') || lowerInput.includes('college') || lowerInput.includes('school')) {
    return "He is currently pursuing a B.Tech in Computer Science & Engineering at Lovely Professional University (2023–Present), specializing in AI & Machine Learning. He previously completed his 10th and 12th with strong academic scores.";
  }

  if (lowerInput.includes('cgpa') || lowerInput.includes('grade') || lowerInput.includes('score') || lowerInput.includes('percentage') || lowerInput.includes('marks')) {
    return "Himanshu currently maintains a CGPA of 7.92/10 in his B.Tech at Lovely Professional University. He also scored 77.8% in 12th and 86% in 10th grade.";
  }

  if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
    return "You can download his latest resume from the Hero section at the top of the page. Just look for the 'Download Resume' button near his profile photo!";
  }

  if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
    return "Hi there! I'm Himanshu's virtual assistant. What would you like to know about his skills, projects, or education?";
  }

  return "I'm not quite sure about that. Try asking about his CGPA, projects, tech stack, or how to contact him!";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking then responding
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userMessage.text),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          size="icon"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-glow/50 transition-all hover:scale-110 bg-primary text-primary-foreground"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100%-2rem)] sm:w-96 h-[500px] max-h-[calc(100vh-120px)] bg-card border border-border rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-muted p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="text-primary" size={20} />
                <h3 className="font-semibold text-foreground">Virtual Assistant</h3>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${message.sender === 'user' ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground'}`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-muted text-foreground rounded-tl-sm'
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-border bg-card">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <Input
                  className="flex-1 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
                  placeholder="Ask about skills, projects..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit" size="icon" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90" disabled={!inputValue.trim()}>
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
