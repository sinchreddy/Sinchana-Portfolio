import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons";
import SectionWrapper, { SectionTitle } from "../ui/SectionWrapper";
import { personalInfo } from "../../data/portfolio";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { Icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/20" },
  { Icon: LinkedInIcon, label: "LinkedIn", value: "sinchana-nandheesha", href: personalInfo.linkedin, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  { Icon: GitHubIcon, label: "GitHub", value: "sinchreddy", href: personalInfo.github, color: "text-slate-300", bg: "bg-slate-400/10 border-slate-400/20" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("Email send failed:", error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="Get In Touch"
        title="Contact Me"
        subtitle="Have a project in mind or just want to connect? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            I'm currently open to internship and full-time opportunities. Whether it's a question, a collaboration, or just a hello — my inbox is always open.
          </p>

          {contactLinks.map(({ Icon, label, value, href, color, bg }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group"
            >
              <div className={`w-12 h-12 rounded-2xl ${bg} border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={18} className={color} />
              </div>
              <div>
                <p className="text-xs text-slate-600 font-mono uppercase tracking-widest mb-0.5">{label}</p>
                <p className={`font-medium ${color} group-hover:underline`}>{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 border border-white/8 space-y-5">
            <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Name</label>
              <input
                type="text"
                name="from_name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-sky-400/5 transition-all duration-300 text-sm font-body"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-sky-400/5 transition-all duration-300 text-sm font-body"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-400/40 focus:bg-sky-400/5 transition-all duration-300 text-sm font-body resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: sent ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #0ea5e9, #8b5cf6)",
                boxShadow: "0 0 30px rgba(14,165,233,0.25)",
              }}
            >
              {sent ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
