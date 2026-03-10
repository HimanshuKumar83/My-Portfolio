import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="font-mono text-primary text-sm block mb-2">07.</span>
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mb-10" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently looking for ML engineering opportunities. Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="text-primary shrink-0" size={18} />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="text-primary shrink-0" size={18} />
                  <span>India</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Contact form submitted! (Connect a backend to make this functional)");
              }}
              className="space-y-4"
            >
              <Input placeholder="Your Name" className="bg-card" required />
              <Input type="email" placeholder="Your Email" className="bg-card" required />
              <Input placeholder="Subject" className="bg-card" required />
              <Textarea placeholder="Your Message" className="bg-card min-h-[120px]" required />
              <Button type="submit" className="w-full gap-2">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
