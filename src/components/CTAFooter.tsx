import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="section-padding animated-gradient-bg">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Build Something Impactful Together
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I am actively seeking internship and junior developer opportunities. Let's connect and create something meaningful.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="mailto:sameeryygg277@gmail.com"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-blue text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="mailto:sameeryygg277@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sameer-gohil-226366289/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/Sameergohil0007" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2024 Sameer Y. Gohil. All rights reserved.
      </p>
      <a
        href="#hero"
        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
      >
        <ArrowUp size={16} />
      </a>
    </div>
  </footer>
);

export { CTASection, Footer };
