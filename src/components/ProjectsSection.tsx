import { motion } from "framer-motion";
import { ExternalLink, Github, Target } from "lucide-react";

const projects = [
  {
    title: "Jetly – Airplane Booking Website",
    description: "Built responsive UI using React.js and implemented booking flow and pages. Complete with search, booking form, and flight display.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "https://github.com/Sameergohil0007",
    live: "https://jetlyweb-main.vercel.app",
  },
  {
    title: "Portfolio Website (on working)",
    description: "Designed personal portfolio with sections & animations. Mobile-friendly and fast UI with smooth scroll and modern dark theme.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sameergohil0007",
    live: "https://sameer-gohil-portfolio-web.vercel.app",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card overflow-hidden hover-glow group"
          >
            {/* Mockup area */}
            <div className="h-48 bg-gradient-to-br from-primary/10 to-accent-blue/10 flex items-center justify-center border-b border-border">
              <div className="w-3/4 h-28 rounded-lg bg-secondary/60 border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-mono">{project.title.split("–")[0].trim()}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
