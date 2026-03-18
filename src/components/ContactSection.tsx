import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!formRef.current) return;

    // TODO: The user must replace these placeholder keys with their actual EmailJS keys
    const SERVICE_ID = "service_s0lkykl";
    const TEMPLATE_ID = "template_6pvv0r8";
    const PUBLIC_KEY = "uhCxm8cZAWx475yqI";



    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSubmitStatus("success");
          setIsSubmitting(false);
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setSubmitStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error Object:", error);
          if (error.text) {
            console.error("EmailJS Error Text:", error.text);
          }
          setSubmitStatus("error");
          setIsSubmitting(false);
          alert(`Failed to send message: ${error.text || error.message || 'Unknown error'}. Check console for details.`);
        }
      );
  };
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
                <div className="flex items-center gap-3 text-base text-muted-foreground">
                  <Mail className="text-primary shrink-0" size={18} />
                  <span>himanshukumarsingh454@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-base text-muted-foreground">
                  <Phone className="text-primary shrink-0" size={18} />
                  <span>+91-8320552114</span>
                </div>
                <div className="flex items-center gap-3 text-base text-muted-foreground">
                  <MapPin className="text-primary shrink-0" size={18} />
                  <span>India</span>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <Input name="user_name" placeholder="Your Name" className="bg-card" required />
              <Input name="user_email" type="email" placeholder="Your Email" className="bg-card" required />
              <Input name="subject" placeholder="Subject" className="bg-card" required />
              <Textarea name="message" placeholder="Your Message" className="bg-card min-h-[120px]" required />
              <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                <Send size={16} /> {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitStatus === "success" && (
                <p className="text-base text-green-500 text-center mt-2">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-base text-red-500 text-center mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
