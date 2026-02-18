
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isDarkPage = ['/', '/about', '/contact', '/checkout', '/admin'].includes(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const WHATSAPP_NUM = "9198216761304";
  const getWaLink = (msg: string) => `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isDarkPage 
          ? 'bg-background-dark/80 border-white/5 text-white' 
          : 'bg-background-light/80 border-stone-200 text-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors">Collections</Link>
            <Link to="/about" className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors">Heritage</Link>
            <a 
              href={getWaLink("Hello Jain Jewels, I would like to speak with a concierge.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors"
            >
              Concierge
            </a>
          </nav>

          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
            <h1 className="serif-text text-xl md:text-2xl tracking-tighter font-bold uppercase">Jain Jewels</h1>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center bg-surface-dark/50 px-3 py-1.5 rounded border border-white/5">
              <span className="material-symbols-outlined text-primary text-sm mr-2">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-[10px] w-24 placeholder:text-slate-500 uppercase tracking-widest" 
                placeholder="Search..." 
                type="text"
              />
            </div>
            <Link to="/checkout" className="hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined font-light">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-primary text-[8px] font-bold text-white rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </Link>
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background-dark flex flex-col p-10 text-white lg:hidden">
          <div className="flex justify-between items-center mb-10">
            <h2 className="serif-text text-2xl font-bold uppercase tracking-widest">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <span className="material-symbols-outlined text-3xl font-light">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-lg font-light tracking-[0.2em] uppercase">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop Collections</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Heritage</Link>
            <a href={getWaLink("Hello Jain Jewels, I would like to speak with a concierge.")} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Concierge</a>
          </nav>
        </div>
      )}

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                <h2 className="serif-text text-3xl tracking-tighter font-bold uppercase">Jain Jewels</h2>
              </div>
              <p className="text-slate-400 font-light text-sm max-w-sm leading-relaxed">
                Join our inner circle for exclusive previews of upcoming collections, bespoke services, and heritage narratives.
              </p>
              <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 text-xs w-full py-4 tracking-widest placeholder:text-slate-600 outline-none" 
                  placeholder="YOUR EMAIL ADDRESS" 
                  type="email"
                />
                <button className="text-primary font-black text-[10px] px-8 tracking-[0.2em] uppercase hover:text-white transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h6 className="text-[10px] uppercase tracking-widest font-bold text-primary">Discover</h6>
                <ul className="space-y-4 text-xs text-slate-400 font-light tracking-wide">
                  <li><Link to="/shop" className="hover:text-white transition-colors">Our Boutiques</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">The Atelier</Link></li>
                  <li><Link to="/shop" className="hover:text-white transition-colors">Gift Guides</Link></li>
                  <li><Link to="/admin" className="hover:text-primary transition-colors text-primary/50">Admin Panel</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h6 className="text-[10px] uppercase tracking-widest font-bold text-primary">Service</h6>
                <ul className="space-y-4 text-xs text-slate-400 font-light tracking-wide">
                  <li><a href={getWaLink("Hello Jain Jewels, I would like to book an appointment.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book Appointment</a></li>
                  <li><a href={getWaLink("Hello Jain Jewels, I would like to see the Care Guide.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Care Guide</a></li>
                  <li><a href={getWaLink("Hello Jain Jewels, I have a question about shipping and returns.")} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h6 className="text-[10px] uppercase tracking-widest font-bold text-primary">Legal</h6>
                <ul className="space-y-4 text-xs text-slate-400 font-light tracking-wide">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Ethical Sourcing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-slate-500 tracking-[0.2em] uppercase">© 2024 Jain Jewels. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg font-light">camera</span></a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg font-light">mail</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
