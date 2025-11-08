import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon City Dashboard',
    desc: 'A reactive admin dashboard with anime neon vibes and fluid interactions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Cosmic Blog',
    desc: 'MDX-powered blog with starfield backgrounds and smooth reading experience.',
    tags: ['Vite', 'MDX', 'Design'],
    link: '#',
  },
  {
    title: 'Chibi Avatar Maker',
    desc: 'Generate cute chibi avatars in your browser using canvas compositing.',
    tags: ['Canvas', 'TypeScript'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0a0d2e] to-[#0b0a1a] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
          <p className="text-white/70">A few pieces from my journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              href={p.link}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-indigo-500/30 blur" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-black/30 px-2 py-1 text-xs text-white/70 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
