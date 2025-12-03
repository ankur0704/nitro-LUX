import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nitro-black border-t border-nitro-gray pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
             <h2 className="font-serif text-3xl font-bold tracking-[0.2em] text-white mb-6">
              NITR<span className="text-nitro-gold">O</span>
            </h2>
            <p className="text-nitro-silver text-xs leading-loose font-sans uppercase tracking-widest opacity-60">
              New York • Paris • Tokyo • Dubai
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-nitro-silver font-sans font-light">
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Bespoke Orders</a></li>
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Private Viewing</a></li>
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Restoration</a></li>
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-nitro-silver font-sans font-light">
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Terms of Sale</a></li>
              <li><a href="#" className="hover:text-nitro-gold transition-colors">Authenticity Guarantee</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6">Newsletter</h4>
            <p className="text-xs text-nitro-silver mb-4 font-sans">Join the inner circle.</p>
            <div className="flex border-b border-nitro-gray pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-white text-sm placeholder-nitro-gray flex-1 uppercase tracking-wider"
              />
              <button className="text-nitro-gold text-xs uppercase font-bold hover:text-white transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-nitro-gray/30">
          <p className="text-[10px] text-nitro-gray uppercase tracking-widest font-sans">© 2025 NITRO Luxury Holdings. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-8 h-8 rounded-full border border-nitro-gray hover:border-nitro-gold cursor-pointer transition-colors"></div>
             <div className="w-8 h-8 rounded-full border border-nitro-gray hover:border-nitro-gold cursor-pointer transition-colors"></div>
             <div className="w-8 h-8 rounded-full border border-nitro-gray hover:border-nitro-gold cursor-pointer transition-colors"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;