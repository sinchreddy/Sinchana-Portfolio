import { motion } from "framer-motion";
import { Cloud, Code2, Cpu, Globe, Wrench } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { skills } from "../../data/portfolio";

const iconMap = { Code2, Cpu, Globe, Wrench, Cloud };

const colorMap = {
  brand: {
    icon: "text-sky-400",
    iconBg: "bg-sky-400/10 border-sky-400/20",
    tag: "bg-sky-400/10 text-sky-300 border-sky-400/20",
    glow: "hover:border-sky-400/25 hover:shadow-sky-400/10",
  },
  accent: {
    icon: "text-violet-400",
    iconBg: "bg-violet-400/10 border-violet-400/20",
    tag: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    glow: "hover:border-violet-400/25 hover:shadow-violet-400/10",
  },
  emerald: {
    icon: "text-emerald-400",
    iconBg: "bg-emerald-400/10 border-emerald-400/20",
    tag: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    glow: "hover:border-emerald-400/25 hover:shadow-emerald-400/10",
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        label="Technical Skills"
        title="My Toolkit"
        subtitle="Technologies and tools I work with to build digital experiences"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon];
          const colors = colorMap[skill.color];
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`glass rounded-3xl p-7 border border-white/8 transition-all duration-400 hover:shadow-xl ${colors.glow} relative overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.03), transparent 70%)" }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-11 h-11 rounded-2xl ${colors.iconBg} border flex items-center justify-center shrink-0`}>
                  {Icon && <Icon size={20} className={colors.icon} />}
                </div>
                <h3 className="font-display font-bold text-slate-200 text-lg">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${colors.tag} font-mono`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
