import { motion } from "framer-motion";
import { FolderOpen, Briefcase, BookOpen, Zap, Award } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { stats } from "../../data/portfolio";

const iconMap = { FolderOpen, Briefcase, BookOpen, Zap, Award };

const colors = [
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-700",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-700",
];

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 border border-white/8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.05), transparent 70%)" }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center group"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colors[i]} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {Icon && <Icon size={20} className="text-white" />}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className={`font-display font-black text-3xl sm:text-4xl bg-gradient-to-br ${colors[i]} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
