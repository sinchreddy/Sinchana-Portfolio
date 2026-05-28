import { motion } from "framer-motion";
import { Download, ArrowRight, Terminal, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";

const FloatingOrb = ({ size, color, x, y, delay, duration }) => (
  <motion.div
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{ width: size, height: size, background: color, left: x, top: y, opacity: 0.12 }}
    animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingOrb size={500} color="#38bdf8" x="60%" y="10%" delay={0} duration={12} />
      <FloatingOrb size={400} color="#a78bfa" x="10%" y="40%" delay={2} duration={14} />
      <FloatingOrb size={300} color="#34d399" x="70%" y="60%" delay={4} duration={10} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-sky-400 border border-sky-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              Available for opportunities
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="font-display font-black text-slate-400 text-lg sm:text-xl mb-2 tracking-wide">
              Hello, I'm
            </h1>
            <h2
              className="font-display font-black tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
            >
              <span className="gradient-text animate-gradient">Sinchana</span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>Nandheesha</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <Terminal size={14} className="text-sky-400" />
              <span className="font-mono text-sm text-slate-300">CS Engineer · Full Stack · AI</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12 font-body"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.3)",
              }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white transition-all duration-300"
            >
              <FileText size={18} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs text-slate-600 font-mono uppercase tracking-widest">Find me on</span>
            <div className="h-px bg-white/10 w-8" />
            {[
              { Icon: GitHubIcon, href: personalInfo.github, label: "GitHub" },
              { Icon: LinkedInIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4"
        >
          {[
            { val: "9.03", label: "CGPA", color: "text-sky-400" },
            { val: "9+", label: "Projects", color: "text-violet-400" },
            { val: "4", label: "Internships", color: "text-emerald-400" },
          ].map(({ val, label, color }, i) => (
            <motion.div
              key={label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="glass rounded-2xl p-4 text-center min-w-[100px] border border-white/8"
            >
              <div className={`font-display font-bold text-2xl ${color}`}>{val}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-sky-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
