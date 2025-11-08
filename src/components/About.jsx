import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#0a0d2e] text-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I build immersive web experiences with a love for anime aesthetics: neon gradients, soft glows,
            and micro-interactions that feel alive. I focus on performance, accessibility, and developer experience.
          </p>
          <p className="mt-4 text-white/70">
            When I’m not coding, I sketch character designs, experiment with 3D scenes, and explore storytelling
            through motion.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-indigo-500 opacity-30 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.25),transparent_35%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
