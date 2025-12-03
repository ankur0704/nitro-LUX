import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProduct from './components/FeaturedProduct';
import Concierge from './components/Concierge';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-nitro-black min-h-screen text-white selection:bg-nitro-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Transitional Text */}
        <section className="py-24 px-6 bg-nitro-black flex justify-center">
          <p className="text-lg md:text-2xl font-serif text-center max-w-4xl text-text-gold-gradient leading-relaxed opacity-80">
            "True luxury is not just about possession. It is about the story, the scarcity, and the soul of the object."
          </p>
        </section>

        <CategoryGrid />
        
        <section id="maison" className="py-24 bg-[#080808]">
          <div className="container mx-auto px-6 text-center">
            <span className="text-nitro-gold text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">UNCOMPROMISED</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Craftsmanship', text: 'Every stitch, every gear, every scent is perfected by master artisans with decades of lineage.' },
                 { title: 'Exclusivity', text: 'Produced in strictly limited quantities. Ownership is a privilege reserved for the discerning.' },
                 { title: 'Innovation', text: 'Merging heritage techniques with avant-garde materials to create the future of luxury.' }
               ].map((item, i) => (
                 <div key={i} className="p-8 border border-white/5 hover:border-nitro-gold/30 transition-colors duration-500">
                    <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
                    <p className="text-nitro-silver font-sans font-light text-sm leading-relaxed">{item.text}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        <FeaturedProduct />
      </main>
      
      <Footer />
      <Concierge />
    </div>
  );
};

export default App;