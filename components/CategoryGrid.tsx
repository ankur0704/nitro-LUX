import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <section id="collection" className="py-32 px-6 md:px-12 bg-nitro-black relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-nitro-gray pb-8">
          <div>
            <h2 className="text-nitro-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">The Collections</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Curated Excellence</h3>
          </div>
          <p className="text-nitro-silver max-w-sm text-sm font-sans mt-6 md:mt-0 leading-relaxed text-right md:text-left">
            Explore our distinct categories, each representing the pinnacle of its class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
          {CATEGORIES.map((cat, index) => {
            // Layout logic for bento grid
            const gridClass = 
              index === 0 ? "md:col-span-8 md:row-span-2" :
              index === 1 ? "md:col-span-4 md:row-span-1" :
              index === 2 ? "md:col-span-4 md:row-span-1" :
              "md:col-span-12 md:row-span-1 h-[300px] md:h-auto";

            return (
              <div 
                key={cat.id} 
                className={`relative group overflow-hidden border border-nitro-gray/20 ${gridClass}`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10"></div>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-3xl font-serif text-white mb-2 italic">{cat.title}</h4>
                    <p className="text-nitro-silver text-sm font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 max-w-xs">
                      {cat.description}
                    </p>
                    <button className="flex items-center gap-2 text-nitro-gold text-xs uppercase tracking-widest group/btn">
                      Explore <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;