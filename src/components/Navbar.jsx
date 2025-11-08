import { useState, useEffect } from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-pink-300">
          <Rocket className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Starlit Portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="#projects" className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition">
            <Star className="h-4 w-4" /> Featured
          </a>
        </nav>
      </div>
    </header>
  );
}
