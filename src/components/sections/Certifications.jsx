import { motion } from "framer-motion";
import { Shield, Brain, Rocket, Zap } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { certifications } from "../../data/portfolio";

const iconMap = { Shield, Brain, Rocket, Zap };

const styles = [
  { gradient: "from-sky-500 to-blue-600", bg: "bg-sky-400/10 border-sky-400/20", glow: "hover:shadow-sky-400/10" },
  { gradient: "from-violet-500 to-purple-700", bg: "bg-violet-400/10 border-violet-400/20", glow: "hover:shadow-violet-400/10" },
  { gradient: "from-amber-500 to-orange-600", bg: "bg-amber-400/10 border-amber-400/20", glow: "hover:shadow-amber-400/10" },
  { gradient: "from-emerald-500 to-teal-700", bg: "bg-emerald-400/10 border-emerald-400/20", glow: "hover:shadow-emerald-400/10" },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        label="Recognition"
        title="Certifications & Achievements"
        subtitle="Milestones in my continuous learning journey"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon];
          const s = styles[i % styles.length];
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-6 border border-white/8 transition-all duration-400 hover:shadow-xl ${s.glow} flex items-start gap-5 group`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {Icon && <Icon size={20} className="text-white" />}
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-slate-100 text-base mb-1 leading-snug">{cert.title}</h4>
                <p className="text-slate-500 text-sm font-medium">{cert.issuer}</p>
              </div>
              <div className="ml-auto shrink-0">
                <div className={`w-8 h-8 rounded-full ${s.bg} border flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
