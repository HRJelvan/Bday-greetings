/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Stars, Cake, Sparkles } from 'lucide-react';

const PHOTOS = [
  { url: 'https://picsum.photos/seed/jerizza1/800/1000', caption: 'Radiant as ever' },
  { url: 'https://picsum.photos/seed/jerizza2/800/1000', caption: 'Forever young' },
  { url: 'https://picsum.photos/seed/jerizza3/800/1000', caption: 'Bestie moments' },
  { url: 'https://picsum.photos/seed/jerizza4/800/1000', caption: 'Celebrating you' },
];

const MESSAGES = [
  "To my dearest BFF Jerizza, you don't look a day over 18! Happy 30th Birthday!",
  "Cheers to three decades of being absolutely incredible. You make the world brighter just by being in it.",
  "May your day be filled with as much joy as you've brought into my life. Love you always!",
  "Here's to more adventures, more laughs, and more memories. Happy Birthday, Bestie!"
];

const FLOATING_ELEMENTS = [...Array(15)].map((_, i) => ({
  x: Math.random() * 100 + '%',
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10,
}));

const CONFETTI_PARTICLES = [...Array(50)].map((_, i) => ({
  left: Math.random() * 100 + '%',
  xOffset: (Math.random() - 0.5) * 200,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 5,
}));

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#4a4a4a] font-serif overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm uppercase tracking-[0.3em] text-[#a89078] mb-4 block"
          >
            Celebrating a Legend
          </motion.span>
          
          <h1 className="text-7xl md:text-9xl font-light mb-2 relative inline-block">
            Happy 18th
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ type: "spring", delay: 1.2 }}
              className="absolute -top-4 -right-12 bg-[#d4a373] text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-lg font-sans font-bold"
            >
              (actually 30th)
            </motion.div>
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-light italic text-[#8c7851] mt-4">
            Jerizza Ladaan
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 text-lg text-[#a89078] max-w-md mx-auto leading-relaxed"
          >
            A tribute to the most amazing best friend. <br />
            With love, <span className="font-bold text-[#4a4a4a]">Jel</span>
          </motion.p>
        </motion.div>

        {/* Floating Elements Background */}
        <div className="absolute inset-0 pointer-events-none">
          {FLOATING_ELEMENTS.map((el, i) => (
            <motion.div
              key={i}
              className="absolute text-[#d4a373]/20"
              initial={{ 
                x: el.x, 
                y: "110%",
                rotate: 0 
              }}
              animate={{ 
                y: "-10%",
                rotate: 360
              }}
              transition={{ 
                duration: el.duration, 
                repeat: Infinity,
                ease: "linear",
                delay: el.delay
              }}
            >
              {i % 3 === 0 ? <Heart size={24} /> : i % 3 === 1 ? <Stars size={24} /> : <Sparkles size={24} />}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#a89078]"
        >
          <div className="w-px h-12 bg-[#a89078]/30 mx-auto mb-2" />
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
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
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  {msg}
                </motion.p>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
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
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-[#a89078]">The Gallery</span>
            <h2 className="text-5xl font-light mt-4">Captured Moments</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Greeting */}
      <section className="py-32 bg-[#1a1a1a] text-white text-center relative overflow-hidden">
        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
                <span className="block text-3xl font-light">30</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Real Years</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <span className="block text-3xl font-light">∞</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Besties</span>
              </div>
            </div>
            <p className="mt-16 text-sm uppercase tracking-[0.5em] text-[#d4a373]">From Jel with Love</p>
          </motion.div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a373]/10 rounded-full blur-[120px]" />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-[10px] uppercase tracking-widest text-[#a89078] bg-[#faf7f2]">
        &copy; 2026 Crafted for Jerizza by Jel
      </footer>

      {/* Confetti Overlay (Simple CSS implementation) */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {CONFETTI_PARTICLES.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#d4a373', '#8c7851', '#e9edc9', '#faedcd'][i % 4],
                left: particle.left,
                top: -10
              }}
              animate={{
                y: [0, window.innerHeight + 100],
                x: [0, particle.xOffset],
                rotate: [0, 360]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
