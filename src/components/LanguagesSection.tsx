import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const languages = [
  { name: "Gujarati", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Proficient" },
];

const LanguagesSection = () => (
  <section className="py-12 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 flex flex-col sm:flex-row items-center justify-center gap-8"
      >
        <div className="flex items-center gap-2 text-primary">
          <Globe size={20} />
          <span className="font-semibold text-foreground">Languages</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center px-4">
              <p className="text-foreground font-medium">{lang.name}</p>
              <p className="text-xs text-muted-foreground">{lang.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LanguagesSection;
