
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Artisan at work" 
            className="w-full h-full object-cover scale-105 opacity-40 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLPhiFjLL8C7V1gHIThgNRugUJ5MbEtkYKPXHiUzWuafKyq6T5BuDVE2hQsG8MHM2Heqo5xF4PoswGRxUF3mi9y7Of0rb0iO14-IHQEskN2pLH5utlOVfZrCtAR8qm1_rBwrGvRicIV3wOVnrAypHqck12Jh3C7ZIekwRXOkuJfb0ZTuUznk1vlSgj53XgNQDwIK9D34YVbn05C-nU0cKPtC91GVeV9LtUEXUrTzVm_7YsAUphirlOUZWftW0HV6T5dZaTiWMqvnE" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-primary uppercase tracking-[0.4em] text-xs mb-6 block">Established 1984</span>
          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-tight">The Spirit of <span className="italic">Jain Jewels</span></h1>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-2xl mx-auto leading-relaxed">
            A legacy of uncompromising vision, where ancestral tradition meets the pinnacle of modern silver sophistication.
          </p>
        </div>
      </section>

      {/* Mastery Section */}
      <section className="bg-surface-dark py-32 overflow-hidden">
        <div className="px-6 md:px-20 lg:px-40 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Mastery of the <span className="text-primary italic">Detail</span></h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sculptural Form', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRcRIg9qpYHZvpppCaOlgGfISMlXIkyyoOxS65aUVRm4RBf2Q3tgbQqbTPxutXw8o167T-AjZvqHVvMQSn04iCxDBqyvPVIRZzOzbxBiJpm03YyT8zuQ15zm-qKDxbZZJNtXH7TfORnP2ldE0q9ANbEapKd0-_zRahtwKr33XpsN9rOOrJnbMpG3IIMuKlijoNY2YtHYGgcnVVOQdlAi2cvPDPOaxUZ2V2Aj_FQaEJdJVcw_R-YSsjGfYrIBhRN9doCn3iiCTqmaZ2', desc: 'Precision carving that defies the rigidity of solid silver.' },
              { title: 'Traditional Craft', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA29DIXFnkbosh06yoVq6wH2RLKpPoGMbTNhEB5XlzuD1Uvxx378Jrx6YF3_QBdlFQeJe_xUgEYTXeAKn8sa_oWOWT18wiMYSigaZ4V6Sr72beRZgEvVJd8-8_U5RHBDF94XkEqC5LiWUQ2VKbEL9FhHZQ9Odnrnkm0XSPfKzKH94KWzTFLod882edzt9lPQrvW4-SHJWyjAFFSJBvWxqyc9nrNaXEJJzoRtL_WyJyKt0_3gYFlzGq4XK0jsJJ7kqWZx5YAnUh5VZH', desc: 'Techniques passed through generations of master silversmiths.' },
              { title: 'Sensory Finish', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH9q7o-_ojNfCS5CR7oOVeNcxJHlV2NUTVZdF0cV9WCF8Q0aoWEg0LnYBFMr18D1uJnEBhQHnFVup_DOVHLSZJf12y81vfPuMNHLEZpcb577zC1i3raEfZzbkzJ7iY_nVLiYsRLC4eJGDvhYoCDkj7BGa3n7aqr2GtD5dLiob6WcZJSSpfZ0hEdx3HHbhZblefMB8Wkt62QuM0mFWQm3Ho9L9LrtPDzBsgWA0BLcKOBWzAYLsbTsTaXrXtNOANv_0eVQVExhVWyouJ', desc: 'A mirror-like finish that is a delight to the touch.' }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square mb-6 overflow-hidden bg-background-dark">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3 text-primary">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section */}
      <section className="py-32 px-6 md:px-20 lg:px-40">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary uppercase tracking-[0.4em] text-xs mb-4 block">Responsibility</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Ethical Sourcing: <br/><span className="italic">Our Eternal Vow</span></h2>
          <p className="text-white/60 font-light leading-relaxed mb-10">
            We believe that true luxury cannot exist at the expense of our planet. Our metals are sourced with radical transparency, ensuring every piece of Jain Jewels meets the highest ethical benchmarks.
          </p>
          
          <div className="mt-20 pt-20 border-t border-white/5">
            <h3 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Concierge Direct</h3>
            <p className="text-3xl md:text-5xl font-light italic serif-text silver-text-gradient">
              9821671304
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-500">Available for bespoke inquiries and private gallery viewings.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
