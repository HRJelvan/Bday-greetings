/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Heart, Stars, Cake, Sparkles } from 'lucide-react';

const PHOTOS = [
  { url: 'https://picsum.photos/seed/jerizza1/800/1000', caption: 'Radiant as ever' },
  { url: 'https://picsum.photos/seed/jerizza2/800/1000', caption: 'Forever young' },
  { url: 'https://picsum.photos/seed/jerizza3/800/1000', caption: 'Bestie moments' },
  { url: 'https://picsum.photos/seed/jerizza4/800/1000', caption: 'Celebrating you' },
];

const MESSAGES = [
  "To my dearest BFF Jerizza, you don't look a day over 18! Happy 31st Birthday!",
  "Cheers to three decades of being absolutely incredible. You make the world brighter just by being in it.",
  "May your day be filled with as much joy as you've brought into my life. Love you always!",
  "Here's to more adventures, more laughs, and more memories. Happy Birthday, Bestie!"
];

const FLOATING_ELEMENTS = [...Array(15)].map((_, i) => ({
  left: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10,
}));

const CONFETTI_COLORS = ['#d4a373', '#8c7851', '#e9edc9', '#faedcd'];

const CONFETTI_PARTICLES = [...Array(50)].map((_, i) => ({
  left: Math.random() * 100,
  xOffset: (Math.random() - 0.5) * 200,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 5,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
}));

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [msgRef, msgInView] = useInView();
  const [photoRef, photoInView] = useInView();
  const [galleryRef, galleryInView] = useInView();
  const [finalRef, finalInView] = useInView();

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4a4a4a] font-serif overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="z-10 anim-fade-up">
          <span className="text-sm uppercase tracking-[0.3em] text-[#a89078] mb-4 block anim-fade-in-delay">
            Celebrating a Legend
          </span>

          <h1 className="text-7xl md:text-9xl font-light mb-2 relative inline-block">
            Happy 18th
            <div className="absolute -top-4 -right-12 bg-[#d4a373] text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg font-sans font-bold anim-badge-spring">
              (actually 31st)
            </div>
          </h1>

          <h2 className="text-4xl md:text-6xl font-light italic text-[#8c7851] mt-4">
            Jerizza Marie Lagdaan
          </h2>

          <p className="mt-8 text-lg text-[#a89078] max-w-md mx-auto leading-relaxed anim-fade-in-late">
            A tribute to the most amazing best friend. <br />
            With love, <span className="font-bold text-[#4a4a4a]">Jel</span>
          </p>
        </div>

        {/* Floating Elements Background */}
        <div className="absolute inset-0 pointer-events-none">
          {FLOATING_ELEMENTS.map((el, i) => (
            <div
              key={i}
              className="absolute text-[#d4a373]/20 anim-float-up"
              style={{
                left: `${el.left}%`,
                animationDuration: `${el.duration}s`,
                animationDelay: `${el.delay}s`,
              }}
            >
              {i % 3 === 0 ? <Heart size={24} /> : i % 3 === 1 ? <Stars size={24} /> : <Sparkles size={24} />}
            </div>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a89078] anim-bounce">
          <div className="w-px h-12 bg-[#a89078]/30 mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            ref={msgRef}
            className={`space-y-8 transition-all duration-700 ${msgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="flex items-center gap-4 text-[#d4a373]">
              <Cake size={32} />
              <div className="h-px flex-1 bg-[#d4a373]/30" />
            </div>
            <h3 className="text-4xl font-light leading-tight">
              Three Decades of <br />
              <span className="italic text-[#8c7851]">Grace & Beauty</span>
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-[#6b6b6b]">
              {MESSAGES.map((msg, i) => (
                <p
                  key={i}
                  className={`transition-opacity duration-500 ${msgInView ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: msgInView ? `${i * 200}ms` : '0ms' }}
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>

          <div
            ref={photoRef}
            className={`relative transition-all duration-700 ${photoInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/jerizza_main/800/1000"
                alt="Jerizza"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-sm italic text-[#8c7851]">"Age is merely the number of years the world has been enjoying you."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-[#a89078]">The Gallery</span>
            <h2 className="text-5xl font-light mt-4">Captured Moments</h2>
          </div>

          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHOTOS.map((photo, i) => (
              <div
                key={i}
                className={`group transition-all duration-500 hover:-translate-y-2 ${galleryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: galleryInView ? `${i * 100}ms` : '0ms' }}
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-center text-sm italic text-[#a89078]">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Greeting */}
      <section className="py-32 bg-[#1a1a1a] text-white text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <div
            ref={finalRef}
            className={`transition-all duration-700 ${finalInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <Heart className="mx-auto mb-8 text-[#d4a373]" size={48} fill="currentColor" />
            <h2 className="text-5xl md:text-7xl font-light mb-6">Happy Birthday, Jerizza!</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              May this new chapter be your most beautiful one yet.
              You deserve all the magic the world has to offer.
            </p>
            <div className="mt-12 flex justify-center gap-8">
              <div className="text-center">
                <span className="block text-3xl font-light">18</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Years Old</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <span className="block text-3xl font-light">31</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Real Years</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <span className="block text-3xl font-light">∞</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Besties</span>
              </div>
            </div>
            <p className="mt-16 text-sm uppercase tracking-[0.5em] text-[#d4a373]">From Jel with Love</p>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a373]/10 rounded-full blur-[120px]" />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] uppercase tracking-widest text-[#a89078] bg-[#faf7f2]">
        &copy; 2026 Crafted for Jerizza by Jel
      </footer>

      {/* Confetti Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {CONFETTI_PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full anim-confetti-fall"
              style={{
                backgroundColor: particle.color,
                left: `${particle.left}%`,
                top: -10,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                '--x-offset': `${particle.xOffset}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}
    </div>
  );
}
