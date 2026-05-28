import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { experience } from "../../data/portfolio";

const colors = [
  { dot: "bg-sky-400", border: "border-sky-400", badge: "bg-sky-400/10 text-sky-300 border-sky-400/20", glow: "hover:border-sky-400/25" },
  { dot: "bg-violet-400", border: "border-violet-400", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20", glow: "hover:border-violet-400/25" },
  { dot: "bg-emerald-400", border: "border-emerald-400", badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20", glow: "hover:border-emerald-400/25" },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Work History"
        title="Experience"
        subtitle="Industry, research, and technical experience across software, AI, and mobile development"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-sky-400/40 via-violet-400/40 to-emerald-400/40 hidden sm:block" />

        <div className="space-y-8">
          {experience.map((exp, i) => {
            const c = colors[i % colors.length];
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="sm:pl-20 relative"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 w-16 h-16 items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${c.dot} relative`}>
                    <div className={`absolute inset-0 rounded-full ${c.dot} animate-ping opacity-40`} />
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className={`glass rounded-3xl p-7 border border-white/8 transition-all duration-400 hover:shadow-xl ${c.glow} relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ background: i === 0 ? "rgba(56,189,248,0.05)" : i === 1 ? "rgba(167,139,250,0.05)" : "rgba(52,211,153,0.05)" }}
                  />

                  <div className="flex flex-wrap items-start gap-4 mb-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display font-bold text-slate-100 text-xl leading-tight">{exp.role}</h3>
                        {exp.type === "Current" && (
                          <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${c.badge}`}>
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Briefcase size={14} className="text-slate-500" />
                          <span className="font-semibold text-slate-300">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar size={13} />
                          <span className="text-sm font-mono">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${c.dot.replace("bg-", "text-")}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
