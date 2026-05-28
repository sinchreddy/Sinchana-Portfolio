import { motion } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-sky-400 mb-4 px-3 py-1 rounded-full border border-sky-400/20 bg-sky-400/5"
      >
        {label}
      </motion.span>
      <h2 className="section-heading mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
