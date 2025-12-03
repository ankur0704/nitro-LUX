import React from 'react';
import { PRODUCTS } from '../constants';

const FeaturedProduct: React.FC = () => {
  const product = PRODUCTS[0]; // The watch

  return (
    <section className="py-32 bg-gradient-to-b from-nitro-black to-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Image Side with "floating" effect */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-nitro-gold/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-full"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-l border-t border-white/10">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* Decorative Lines */}
            <div className="absolute top-8 left-8 w-16 h-[1px] bg-nitro-gold"></div>
            <div className="absolute top-8 left-8 h-16 w-[1px] bg-nitro-gold"></div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
             <span className="h-[1px] w-12 bg-nitro-gold"></span>
             <span className="text-nitro-gold uppercase tracking-[0.3em] text-xs font-bold">Masterpiece of the Month</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-none">
            {product.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h2>

          <div className="flex gap-12 mb-10 border-t border-white/10 pt-8">
            <div>
               <span className="block text-xs text-nitro-silver uppercase tracking-wider mb-2">Material</span>
               <span className="font-serif text-xl text-white">Black Titanium</span>
            </div>
            <div>
               <span className="block text-xs text-nitro-silver uppercase tracking-wider mb-2">Movement</span>
               <span className="font-serif text-xl text-white">Caliber 9001</span>
            </div>
             <div>
               <span className="block text-xs text-nitro-silver uppercase tracking-wider mb-2">Limited</span>
               <span className="font-serif text-xl text-white">50 Units</span>
            </div>
          </div>

          <p className="text-nitro-silver font-sans leading-relaxed mb-10 max-w-md">
            {product.description} Designed for those who command time itself. 
            Engineered with precision that rivals aerospace technology, finished with the touch of an artist.
          </p>

          <div className="flex items-center gap-8">
            <button className="px-12 py-5 bg-white text-nitro-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-nitro-gold transition-colors duration-300">
              Acquire Now
            </button>
            <span className="text-2xl font-serif text-nitro-gold italic">
              ${product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;