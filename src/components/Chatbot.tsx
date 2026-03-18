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

// Simple keyword-based QA engine for recruiter queries
const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
    return "Himanshu specializes in Machine Learning and Data Science. His core stack includes Python, PyTorch, TensorFlow, Scikit-learn, Pandas, and fastAPI. He also has experience deploying models using Docker and AWS.";
  }
  
  if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('build')) {
    return "Some of his notable projects include an Image Classification CNN using transfer learning on ResNet50, a Sentiment Analysis engine fine-tuned on BERT, and an LSTM-based Stock Price Predictor. You can check out the Projects section for links to the demos!";
  }
  
  if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
    return "Himanshu is an aspiring Machine Learning Engineer. While he doesn't have formal full-time industry experience yet, he has built multiple end-to-end ML projects demonstrating his capabilities in computer vision, NLP, and model deployment.";
  }
  
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
    return "You can reach Himanshu directly via email at himanshukumarsingh454@gmail.com. You can also connect with him on LinkedIn. Both links are available in the Contact section.";
  }
  
  if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('study')) {
    return "He has a strong foundation in mathematics, statistics, and programming. You can view his full educational background in the Education section.";
  }
  
  if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
    return "You can download his latest resume from the Hero section at the top of the page, or simply scroll up and click the 'Download Resume' button.";
  }

  if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
    return "Hi there! What would you like to know about Himanshu's profile?";
  }

  return "I'm not quite sure how to answer that. Try asking about his skills, projects, education, or how to contact him!";
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
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-glow/50 transition-all hover:scale-110 bg-primary text-primary-foreground"
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
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[calc(100vh-120px)] bg-card border border-border rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden"
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
                    className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
                      message.sender === 'user'
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
