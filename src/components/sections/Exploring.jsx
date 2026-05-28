import { motion } from "framer-motion";
import { Brain, Cloud, Network, Shield, Smartphone } from "lucide-react";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { exploring } from "../../data/portfolio";

const iconMap = { Brain, Cloud, Network, Shield, Smartphone };

const gradients = [
  "from-sky-500/20 to-blue-600/20 border-sky-400/20 hover:border-sky-400/40",
  "from-violet-500/20 to-purple-700/20 border-violet-400/20 hover:border-violet-400/40",
  "from-emerald-500/20 to-teal-700/20 border-emerald-400/20 hover:border-emerald-400/40",
  "from-amber-500/20 to-orange-600/20 border-amber-400/20 hover:border-amber-400/40",
  "from-rose-500/20 to-pink-700/20 border-rose-400/20 hover:border-rose-400/40",
];

const iconColors = [
  "text-sky-400", "text-violet-400", "text-emerald-400", "text-amber-400", "text-rose-400"
];

export default function Exploring() {
  return (
    <SectionWrapper id="exploring">
      <SectionTitle
        label="Growth Mindset"
        title="Currently Exploring"
        subtitle="Technologies and domains I'm actively learning and diving deeper into"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {exploring.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative rounded-2xl p-5 border bg-gradient-to-br ${gradients[i]} transition-all duration-400 group cursor-default`}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4"
              >
                {Icon && <Icon size={28} className={iconColors[i]} />}
              </motion.div>
              <h4 className="font-display font-bold text-slate-200 text-sm mb-2 leading-snug">{item.topic}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>

              <div className="absolute bottom-3 right-3">
                <div className={`w-2 h-2 rounded-full ${iconColors[i].replace("text-", "bg-")} animate-pulse`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
