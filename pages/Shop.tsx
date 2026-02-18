
import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All Pieces';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(15000);

  const categories = ['All Pieces', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Watches', 'Chains', 'Kada', 'Bangles', 'Payal', 'Other'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = selectedCategory === 'All Pieces' || p.category === selectedCategory;
      const matchPrice = p.price <= priceRange;
      return matchCat && matchPrice;
    });
  }, [selectedCategory, priceRange]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">Category</h3>
              <div className="space-y-3">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="flex items-center justify-between w-full cursor-pointer group"
                  >
                    <span className={`text-sm font-medium transition-colors ${selectedCategory === cat ? 'text-primary' : 'group-hover:text-primary'}`}>{cat}</span>
                    <span className={`text-[10px] ${selectedCategory === cat ? 'text-primary' : 'text-stone-500'}`}>
                      {cat === 'All Pieces' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === (cat as any)).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">Price Range</h3>
              <div className="mt-4">
                <input 
                  type="range" 
                  min="500" 
                  max="30000" 
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-stone-200 dark:bg-stone-800 rounded-full appearance-none accent-primary"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-xs font-semibold text-stone-500">$500</span>
                  <span className="text-xs font-semibold text-stone-500 font-bold text-primary">${priceRange.toLocaleString()}+</span>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQy-HT5L3Ei8KrNJmoAGT98sj9DmteAnlYvCyLAumt6RiHpu9k-Iy7s3Z-uC1ONNOHITcm3iA6oHsnoWaGm1sZUNE88zbWJec9yARzXCw2UEOxghu2ayDMVCJHIHEgFC3LCK1OfIhfF01VTL3OMaGT1s5Dh64SZx8RH-k_U1QA4RsWrJbwhXuxSE-dkHaoPieNtKO-oIRPR2sSN40t2r2v_GCeQj6vbnYRshzQX_L3jUOLekBq8h3KKii2GtOjNA5RIGGk9PFvn-VP" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">New Arrivals</p>
                <h4 className="text-lg font-bold text-white mb-4">Elysian Series</h4>
                <Link to="/shop" className="text-xs font-bold text-white underline underline-offset-4 hover:text-primary transition-colors">Discover</Link>
              </div>
            </div>
          </aside>

          {/* Main Content Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100 dark:border-stone-900">
              <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">{filteredProducts.length} Pieces Found</span>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-xs font-bold uppercase tracking-widest">Sort By:</span>
                  <span className="text-xs font-medium text-stone-500 group-hover:text-primary">Featured</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
                <div className="flex items-center gap-2 border-l border-stone-800 pl-8">
                  <button className="text-primary"><span className="material-symbols-outlined">grid_view</span></button>
                  <button className="text-stone-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">view_agenda</span></button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative">
                  <div className="relative aspect-[4/5] bg-stone-100 dark:bg-surface-dark overflow-hidden mb-5">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={product.image} alt={product.name} />
                    {product.altImage && (
                      <img className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" src={product.altImage} alt={`${product.name} alternate view`} />
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Link to={`/product/${product.id}`} className="block w-full text-center bg-background-light dark:bg-background-dark/90 text-primary border border-primary/30 py-3 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-primary hover:text-white transition-all">
                        Quick View
                      </Link>
                    </div>
                    <button className="absolute top-4 right-4 text-white/50 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined font-light">favorite</span>
                    </button>
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-primary text-[9px] text-white px-3 py-1 font-bold uppercase tracking-widest">New</span>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold tracking-wide mb-1 uppercase">{product.name}</h3>
                    <p className="text-xs text-stone-500 mb-2 font-medium">{product.material}</p>
                    <p className="text-primary font-bold tracking-widest">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-20 flex justify-center items-center gap-4">
                <button className="w-10 h-10 flex items-center justify-center border border-stone-800 text-stone-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold text-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-stone-800 text-stone-500 hover:text-primary hover:border-primary transition-all text-sm font-bold">2</button>
                </div>
                <button className="w-10 h-10 flex items-center justify-center border border-stone-800 text-stone-500 hover:text-primary hover:border-primary transition-all">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
