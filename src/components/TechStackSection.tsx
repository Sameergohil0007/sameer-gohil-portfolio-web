import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Layout } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Other",
    icon: Code2,
    skills: ["Responsive Design", "REST APIs"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStackSection = () => (
  <section id="skills" className="section-padding animated-gradient-bg">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            className="glass-card p-6 hover-glow group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStackSection;
