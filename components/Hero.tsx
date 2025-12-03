import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for a high-quality video or image */}
        <img 
          src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nitro-black/30 via-transparent to-nitro-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-nitro-gold uppercase tracking-[0.5em] text-xs md:text-sm mb-6 animate-fade-in font-sans font-semibold">
          Est. 2025 • Worldwide
        </p>
        <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-medium mb-8 leading-tight tracking-tight animate-slide-up">
          REDEFINING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-nitro-white via-nitro-silver to-nitro-white italic">OPULENCE</span>
        </h1>
        <p className="text-nitro-silver font-sans font-light text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          NITRO is the apex of craftsmanship and desire. Where bespoke design meets uncompromising utility. 
          Step into a world reserved for the few.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <button className="px-10 py-4 bg-nitro-gold text-nitro-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-500 min-w-[200px]">
            Discover Collection
          </button>
          <button className="px-10 py-4 border border-nitro-white/30 text-white font-sans font-bold uppercase tracking-widest text-xs hover:border-nitro-gold hover:text-nitro-gold transition-colors duration-500 min-w-[200px] backdrop-blur-sm">
            View Maison
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow text-nitro-silver/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
};

export default Hero;