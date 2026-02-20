import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
  {
    title: "Full Stack Developer",
    institution: "Skywin IT Academy",
    period: "2023 – 2024",
    detail: "Grade: A+",
  },
  {
    title: "B.Sc IT",
    institution: "Bhagwan Mahavir University",
    period: "2023 – Present",
    detail: "CGPA: 6.00",
  },
  {
    title: "HSC",
    institution: "P.P. Savani Vidhyalaya",
    period: "2022 – 2023",
    detail: "66%",
  },
  {
    title: "SSC",
    institution: "P.P. Savani Vidhyalaya",
    period: "2020 – 2021",
    detail: "55%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding animated-gradient-bg">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative flex items-start mb-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-5 z-10" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-card p-5 hover-glow">
                <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <GraduationCap size={16} className="text-primary" />
                  <span className="text-xs font-mono text-primary">{item.period}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <p className="text-sm text-primary mt-1 font-medium">{item.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
