import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { research } from "../../data/portfolio";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionTitle label="Academic" title="Research Publication" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass rounded-3xl p-8 sm:p-10 border border-white/8 relative overflow-hidden group hover:border-sky-400/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)" }}
          />

          {/* Icon Header */}
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
              <BookOpen size={24} className="text-sky-400" />
            </div>
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-[0.2em] block mb-2">
                Peer-Reviewed Research
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-mono">Published</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-100 mb-6 leading-tight">
            "{research.title}"
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-8 text-lg">
            {research.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Automated Evaluation", "Web-Based Exam", "Academic Analytics", "Teacher Dashboard"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-mono bg-sky-400/10 text-sky-300 border border-sky-400/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/8">
            <div className="flex items-center gap-2 text-slate-500">
              <FileText size={14} />
              <span className="text-sm">Research Paper</span>
            </div>
            <a
              href="https://dl.thehinweis.com/journal-paper/eyJpdiI6IlBZR2syRzJRK2ZBSkNGUlhBTEhxU3c9PSIsInZhbHVlIjoiR2dzRGwrclI2bnpMeEtTY0JXWTM2UT09IiwibWFjIjoiYmM2ZDYyMjAzMjQ5MjE0MmQwNGM1ZjgzYmE3ZjVjNTJjMzhkM2I3ZTQwNzQwMDc3OGFmOWUwYzc0ODkwZDljNiIsInRhZyI6IiJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-sm font-medium text-slate-300 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-300"
            >
              <ExternalLink size={14} />
              View Publication
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
