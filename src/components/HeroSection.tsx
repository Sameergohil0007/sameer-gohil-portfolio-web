import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";

const Particles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.4 + 0.1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) =>
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity, p.opacity * 1.5, p.opacity]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }} />

      )}
    </div>);

};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 animated-gradient-bg overflow-hidden">

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(ellipse 600px 600px at 20% 40%, hsl(217 91% 60% / 0.12) 0%, transparent 70%), " +
            "radial-gradient(ellipse 500px 500px at 75% 25%, hsl(199 89% 48% / 0.10) 0%, transparent 70%), " +
            "radial-gradient(ellipse 400px 400px at 50% 75%, hsl(217 91% 60% / 0.08) 0%, transparent 70%)"
        }} />

      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(ellipse 300px 300px at 60% 30%, hsl(199 89% 48% / 0.06) 0%, transparent 70%)"
        }} />


      {/* Floating particles */}
      <Particles />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight">Sameer Gohil

          </h1>
          <div className="text-lg md:text-xl mb-8 h-8">
            <TypewriterEffect />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">

          Building Scalable & Modern Web Applications with MERN Stack. Motivated developer with strong skills in React.js, Node.js, Express.js, and MongoDB — seeking an internship or junior developer role.
        </motion.p>

        {/* Glass contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass-card inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 mb-10 text-sm text-muted-foreground">

          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Surat, Gujarat</span>
          <span className="hidden sm:inline text-border">|</span>
          <a href="mailto:sameeryygg277@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" /> sameeryygg277@gmail.com
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="https://github.com/Sameergohil0007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Github size={14} className="text-primary" /> GitHub
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a href="https://www.linkedin.com/in/sameer-gohil-226366289/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Linkedin size={14} className="text-primary" /> LinkedIn
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4">

          <a href="#contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-blue text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Hire Me
          </a>
          <a href="#projects" className="px-8 py-3 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-colors">
            View Projects
          </a>
          <a href="/Sameer-Resume_CV.pdf" download className="px-8 py-3 rounded-lg text-muted-foreground hover:text-foreground font-medium transition-colors">
            Download Resume ↓
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;