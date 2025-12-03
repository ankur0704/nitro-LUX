import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-nitro-black/90 backdrop-blur-md border-nitro-gray py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Mobile Menu Trigger / Desktop Links */}
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-sans font-medium text-nitro-silver">
          <a href="#collection" className="hover:text-nitro-gold transition-colors">Collection</a>
          <a href="#maison" className="hover:text-nitro-gold transition-colors">Maison</a>
          <a href="#bespoke" className="hover:text-nitro-gold transition-colors">Bespoke</a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center group cursor-pointer">
          <h1 className={`font-serif font-bold tracking-[0.2em] text-white transition-all duration-500 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
            NITR<span className="text-nitro-gold">O</span>
          </h1>
          <div className="h-[1px] w-0 bg-nitro-gold mx-auto group-hover:w-full transition-all duration-500"></div>
        </div>

        {/* Right: Icons */}
        <div className="flex gap-6 items-center text-nitro-white">
          <button className="hover:text-nitro-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="relative hover:text-nitro-gold transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-nitro-gold rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-nitro-black z-50 flex flex-col justify-center items-center gap-8 animate-fade-in">
           <button 
            className="absolute top-8 right-8 text-nitro-gold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close [X]
          </button>
          {['Collection', 'Maison', 'Bespoke', 'Journal', 'Account'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-white hover:text-nitro-gold transition-colors tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;