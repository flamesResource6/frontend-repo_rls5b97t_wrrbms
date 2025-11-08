import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#0b0a1a] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-white/70">Let’s create something magical.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl"
        >
          <input required placeholder="Your name" className="rounded-md bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <input required type="email" placeholder="Email" className="rounded-md bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <textarea required rows="4" placeholder="Message" className="md:col-span-2 rounded-md bg-black/30 px-3 py-2 text-sm text-white placeholder-white/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          <button type="submit" className="inline-flex items-center gap-2 w-max rounded-md bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/30 hover:bg-pink-400 transition">
            <Mail className="h-4 w-4" /> Send
          </button>
        </motion.form>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Aiko — All rights reserved.</p>
      </div>
    </section>
  );
}
