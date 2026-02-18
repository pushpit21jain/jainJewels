
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.image);

  const whatsappNumber = "98216761304";
  const whatsappMessage = encodeURIComponent(`Hello Jain Jewels, I am interested in acquiring the ${product.name} (${product.id}). Could you please assist me with the purchase?`);
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 pb-20">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 mb-8">
          <Link className="hover:text-primary" to="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary" to="/shop">Collections</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-300">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto">
              {[product.image, product.altImage || product.image, product.image].map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 flex-shrink-0 border-2 rounded-lg cursor-pointer bg-neutral-dark overflow-hidden transition-all ${selectedImage === img ? 'border-primary' : 'border-border-dark hover:border-primary'}`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                </div>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] bg-neutral-dark rounded-xl overflow-hidden relative border border-border-dark group">
              <img src={selectedImage} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Main product" />
              <button className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-white">zoom_in</span>
              </button>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-2">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Handcrafted Excellence</span>
            </div>
            <h2 className="serif-font text-4xl lg:text-5xl text-white mb-4 leading-tight">{product.name}</h2>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-2xl text-primary font-medium">${product.price.toLocaleString()}.00</p>
              <div className="h-4 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-sm fill-1">star</span>)}
                <span className="text-xs text-slate-400 ml-1">({product.reviewsCount || 48} Reviews)</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {product.description} Meticulously set in solid precious metal. The minimalist setting maximizes light entry, ensuring unparalleled brilliance and fire from every angle.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 block">Metal Color: {product.material}</span>
                <div className="flex gap-3">
                  <button className="w-8 h-8 rounded-full border-2 border-primary p-0.5">
                    <div className="w-full h-full rounded-full bg-emerald-700"></div>
                  </button>
                  <button className="w-8 h-8 rounded-full border border-white/10 p-0.5 hover:border-slate-500">
                    <div className="w-full h-full rounded-full bg-[#e5e4e2]"></div>
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500">Size</label>
                  <button className="text-[10px] uppercase tracking-widest text-primary underline decoration-primary/30">Size Guide</button>
                </div>
                <select className="w-full bg-neutral-dark border border-white/10 rounded py-3 px-4 text-sm text-white focus:border-primary focus:ring-0 appearance-none">
                  <option>US 5.0 / Small</option>
                  <option selected>US 6.0 / Medium</option>
                  <option>US 7.0 / Large</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 border border-white/10 hover:border-primary text-white font-bold py-4 rounded text-xs uppercase tracking-widest transition-all text-center block"
              >
                Add to Bag via WhatsApp
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:brightness-110 text-background-dark font-black py-4 rounded text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Buy Now via WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-8 py-6 border-t border-white/10">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-xl">verified</span>
                <span className="text-[9px] uppercase tracking-tight text-slate-400 leading-tight">Authentic Certified</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-xl">local_shipping</span>
                <span className="text-[9px] uppercase tracking-tight text-slate-400 leading-tight">Insured Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-xl">history</span>
                <span className="text-[9px] uppercase tracking-tight text-slate-400 leading-tight">Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
