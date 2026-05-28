import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Tag, Layers } from "lucide-react";
import { GitHubIcon as Github } from "../ui/SocialIcons";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { projects } from "../../data/portfolio";

const colorMap = {
  brand: {
    tag: "bg-sky-400/10 text-sky-300 border-sky-400/20",
    accent: "text-sky-400",
    glow: "hover:border-sky-400/25 hover:shadow-sky-400/5",
    badge: "from-sky-500 to-blue-600",
  },
  accent: {
    tag: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    accent: "text-violet-400",
    glow: "hover:border-violet-400/25 hover:shadow-violet-400/5",
    badge: "from-violet-500 to-purple-700",
  },
  emerald: {
    tag: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    accent: "text-emerald-400",
    glow: "hover:border-emerald-400/25 hover:shadow-emerald-400/5",
    badge: "from-emerald-500 to-teal-700",
  },
};

function ProjectModal({ project, onClose }) {
  const c = colorMap[project.color];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-lg w-full glass rounded-3xl p-8 border border-white/12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
        >
          <X size={16} />
        </button>

        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-gradient-to-r ${c.badge} text-white mb-5`}>
          <Layers size={11} />
          {project.category}
        </div>

        <h3 className="font-display font-bold text-2xl text-slate-100 mb-1">{project.title}</h3>
        {project.subtitle && <p className={`text-sm font-medium mb-4 ${c.accent}`}>{project.subtitle}</p>}

        <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

        <div className="mb-7">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={13} className="text-slate-500" />
            <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className={`px-3 py-1.5 rounded-lg text-xs font-mono border ${c.tag}`}>{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-white/10 text-sm font-medium text-slate-300 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${c.badge} hover:opacity-90 transition-opacity`}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const c = colorMap[project.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`glass rounded-3xl p-6 border border-white/8 cursor-pointer transition-all duration-400 hover:shadow-2xl ${c.glow} relative overflow-hidden group`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, rgba(56,189,248,0.04), transparent 70%)` }}
      />

      {project.featured && (
        <span className={`absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-gradient-to-r ${c.badge} text-white`}>
          Featured
        </span>
      )}

      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border mb-5 ${c.tag}`}>
        {project.category}
      </div>

      <h3 className="font-display font-bold text-lg text-slate-100 mb-1 pr-20">{project.title}</h3>
      {project.subtitle && <p className={`text-xs font-medium mb-3 ${c.accent}`}>{project.subtitle}</p>}

      <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className={`px-2.5 py-1 rounded-md text-xs font-mono border ${c.tag}`}>{t}</span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-500">+{project.tech.length - 3}</span>
        )}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/6">
        <a href={project.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer"
          className={`flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:${c.accent.replace("text-", "text-")} transition-colors`}>
          <Github size={13} /> Code
        </a>
        <a href={project.demo} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer"
          className={`flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:${c.accent} transition-colors`}>
          <ExternalLink size={13} /> Demo
        </a>
        <span className={`ml-auto text-xs ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity font-mono`}>
          Click for details →
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="My Work"
        title="Projects"
        subtitle="A selection of what I've built — from mobile apps to AI systems"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} onClick={() => setSelected(project)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  );
}
