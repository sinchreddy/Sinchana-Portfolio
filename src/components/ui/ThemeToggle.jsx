import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ dark, toggle }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-sky-400 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}
