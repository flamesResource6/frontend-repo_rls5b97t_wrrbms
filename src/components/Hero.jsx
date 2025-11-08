import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0a1a] via-[#0a0d2e] to-[#0a0a0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7Q9mE5YyhmXc2dpc/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/20 via-purple-500/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase text-pink-200/90 ring-1 ring-white/15">Anime-inspired portfolio</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Aiko</span>
          </h1>
          <p className="text-white/80 max-w-prose">
            Frontend sorcerer crafting delightful, high-performance experiences with a sprinkle of anime elegance and cosmic gradients.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-pink-500/30 hover:bg-pink-400 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">Contact</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 opacity-30 blur-2xl rounded-full" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-3 gap-3">
              {['React', 'Tailwind', 'Framer', 'Spline', 'FastAPI', 'MongoDB'].map((skill) => (
                <div key={skill} className="rounded-md bg-black/30 py-3 text-center text-xs text-white/80 ring-1 ring-white/10">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
