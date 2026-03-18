import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base text-muted-foreground">
          © {new Date().getFullYear()} Himanshu Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/HimanshuKumar83" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/himanshukumar011/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:himanshukumarsingh454@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
