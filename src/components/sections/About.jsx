import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { about } from "../../data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle label="Who I Am" title="About Me" />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="glass rounded-3xl p-8 border border-white/8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-400/5 rounded-full blur-2xl" />
            <p className="text-slate-300 text-lg leading-relaxed relative z-10">
              {about.summary}
            </p>
          </div>

          {/* Interests */}
          <div className="grid grid-cols-2 gap-3">
            {["Software Development", "AI & ML Systems", "Cybersecurity", "Mobile Apps", "Full Stack Web", "Open Source"].map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-xl px-4 py-2.5 text-sm text-slate-400 border border-white/6 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass rounded-3xl p-8 border border-white/8 relative overflow-hidden group hover:border-sky-400/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 via-transparent to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/10 flex items-center justify-center border border-sky-400/20">
                <GraduationCap size={22} className="text-sky-400" />
              </div>
              <div>
                <p className="text-xs font-mono text-sky-400 uppercase tracking-widest">Education</p>
                <p className="font-display font-bold text-slate-200 text-lg">Academic Background</p>
              </div>
            </div>

            <div className="space-y-5 relative z-10">
              <h3 className="font-display font-bold text-xl text-slate-100 leading-snug">
                {about.education.degree}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin size={15} className="text-violet-400 shrink-0 mt-0.5" />
                  <span className="text-sm leading-snug">{about.education.institution}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Calendar size={15} className="text-emerald-400 shrink-0" />
                  <span className="text-sm font-mono">{about.education.period}</span>
                </div>
              </div>

              {/* CGPA Bar */}
              <div className="pt-4 border-t border-white/8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-amber-400" />
                    <span className="text-sm text-slate-400 font-medium">CGPA</span>
                  </div>
                  <span className="font-display font-bold text-2xl gradient-text">{about.education.cgpa}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90.2%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #0ea5e9, #8b5cf6)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
