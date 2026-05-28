import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-slate-500 text-sm"
        >
          <span className="font-display font-bold gradient-text text-base">SN</span>
          <span className="text-slate-700">·</span>
          <span>© {year} Sinchana Nandheesha</span>
          <span className="text-slate-700">·</span>
          <span className="flex items-center gap-1">
            Built with <Heart size={12} className="text-rose-400 fill-rose-400 mx-0.5" /> and React
          </span>
        </motion.div>

        <div className="flex items-center gap-3">
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
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-sky-400 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
