import { motion } from "framer-motion";
import { Code, Smartphone, Plug, Zap } from "lucide-react";

const cards = [
  { icon: Code, title: "Clean & Maintainable Code", desc: "Well-structured, readable code following best practices and modern patterns." },
  { icon: Smartphone, title: "Responsive & Modern UI", desc: "Pixel-perfect, mobile-first interfaces with smooth animations." },
  { icon: Plug, title: "REST API Integration", desc: "Robust backend connectivity with Express.js and MongoDB." },
  { icon: Zap, title: "Fast Learner & Team Player", desc: "Adaptable, collaborative, and always eager to pick up new technologies." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyHireMeSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Value</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Hire Me</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card) => (
          <motion.div key={card.title} variants={item} className="glass-card p-6 text-center hover-glow group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <card.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-sm">{card.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyHireMeSection;
