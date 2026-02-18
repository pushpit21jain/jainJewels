
import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_DATA, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const WHATSAPP_NUM = "9198216761304";
  const getWaLink = (msg: string) => `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

  // Find products for the Signature List
  const signatureProducts = HOME_PAGE_DATA.signatureListIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(p => !!p);

  return (
    <div className="bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/40 to-transparent z-10"></div>
          <img 
            alt="Hero Visual" 
            className="w-full h-full object-cover object-center scale-105" 
            src={HOME_PAGE_DATA.hero.image}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold block">The Atelier Collection</span>
              <h2 className="serif-text text-5xl md:text-7xl leading-[1.1] font-bold text-white">
                {HOME_PAGE_DATA.hero.heading.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word === 'Heritage.' ? <span className="italic">Heritage.</span> : word}{' '}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-slate-300 text-lg max-w-md font-light">{HOME_PAGE_DATA.hero.subheading}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="bg-primary text-background-dark font-black uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-white transition-all transform hover:-translate-y-1 inline-block text-center">
                New Collection
              </Link>
              <Link to="/about" className="border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] px-10 py-5 hover:bg-white hover:text-background-dark transition-all transform hover:-translate-y-1 inline-block text-center">
                View Heritage
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-primary tracking-[0.3em] uppercase text-[10px] font-bold">Categories</span>
              <h3 className="serif-text text-4xl font-bold">Exquisite Collections</h3>
            </div>
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.2em] border-b border-primary/40 pb-1 font-black text-primary hover:text-white hover:border-white transition-all">Explore All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HOME_PAGE_DATA.featuredCollections.map((coll, idx) => (
              <Link key={idx} to={`/shop?cat=${coll.category}`} className="group relative aspect-[16/9] overflow-hidden cursor-pointer">
                <img alt={coll.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" src={coll.image} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h4 className="serif-text text-3xl font-bold mb-2">{coll.title}</h4>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 border-b border-white/30 pb-1">Shop Collection</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature List / Best Sellers */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary tracking-[0.3em] uppercase text-[10px] font-bold">Curated for You</span>
            <h3 className="serif-text text-4xl md:text-5xl font-bold">The Signature List</h3>
            <div className="w-20 h-px bg-primary/30 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureProducts.map(item => (
              <Link to={`/product/${item!.id}`} key={item!.id} className="group">
                <div className="relative aspect-square overflow-hidden bg-background-dark mb-4">
                  <img src={item!.image} alt={item!.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1">
                    <span className="text-white text-[10px] font-black tracking-tighter">${item!.price.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="uppercase text-[10px] tracking-widest text-primary font-bold mb-1">{item!.collection}</p>
                  <h5 className="text-sm font-light tracking-wide">{item!.name}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Details */}
      <section className="py-24 bg-background-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-6 max-w-2xl mx-auto">
            <span className="text-primary tracking-[0.4em] uppercase text-[10px] font-bold block">Visit the Boutique</span>
            <h3 className="serif-text text-5xl md:text-7xl font-bold text-white mb-2">Delhi</h3>
            <div className="space-y-2 mb-10">
              <p className="text-xl tracking-[0.1em] font-medium text-white uppercase">Jain Jewels</p>
              <a 
                href={getWaLink("Hello Jain Jewels, I am inquiring about your Delhi boutique.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-primary font-bold hover:text-white transition-colors block"
              >
                98216761304
              </a>
            </div>
            <a 
              href={getWaLink("Hello Jain Jewels, I would like to book an appointment at your Delhi boutique.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-background-dark font-black uppercase tracking-[0.2em] text-[10px] px-12 py-5 hover:bg-primary transition-all"
            >
              Book Private Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden">
        <div className="w-full lg:w-1/2 relative min-h-[400px]">
          <img 
            alt="Master jeweler working" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxiCZHNIgHGExgZEQCqRcu4UulTFeLh3LnpsAr2KTEjezEQLuBgOqQ3pVfFQl_HiKaRBKl1HRtxV4FJ78wkysueQ55cVJ5ahNUUB8K8avy1SPJ9UeUnidzizo72Yv2Lr2JCxumRRuz5-9bqWSG_vypw2c7ri5tSCNWsztIpyvP_3RBZ2fSEueO2s3dKJ7lfM87CgQyAJTZu_PAqup5Z79z-YhzfRjkdKljNlcNnzQJXvSG5ma-KhWd56sBp_vuP9LEfXAwOp4eau2d" 
          />
        </div>
        <div className="w-full lg:w-1/2 bg-background-dark flex items-center justify-center p-12 lg:p-24">
          <div className="max-w-md space-y-8">
            <span className="text-primary tracking-[0.3em] uppercase text-[10px] font-bold block">Legacy since 1984</span>
            <h3 className="serif-text text-4xl md:text-5xl font-bold leading-tight">Craftsmanship and Heritage</h3>
            <div className="space-y-6 text-slate-400 font-light leading-relaxed italic serif-text text-lg">
              <p>"For generations, Jain Jewels has been at the forefront of silver innovation. Our artisans combine time-honored techniques with contemporary vision to create pieces that are not just accessories, but heirlooms."</p>
            </div>
            <Link to="/about" className="text-[10px] uppercase tracking-widest border border-primary/20 text-primary px-8 py-4 hover:bg-primary hover:text-white transition-all inline-block">
              Discover Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
