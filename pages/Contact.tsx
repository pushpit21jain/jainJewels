
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Jain Jewels,\n\nInquiry from: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/9198216761304?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Side: Contact Form */}
        <section className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-6">Connect with the <br/><span className="font-bold text-primary">House of Jain</span></h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Inquiries regarding bespoke commissions, private viewing appointments, and the Silver Heritage collection.
            </p>
            <form className="space-y-8" onSubmit={handleWhatsAppRedirect}>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Full Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-all placeholder:text-white/20 outline-none" 
                  placeholder="Julian Jain" 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Email Address</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-all placeholder:text-white/20 outline-none" 
                  placeholder="concierge@jainjewels.com" 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Message</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-white px-0 py-3 focus:ring-0 focus:border-primary transition-all placeholder:text-white/20 resize-none outline-none" 
                  placeholder="How may we assist you today?" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <div className="pt-4">
                <button className="group flex items-center gap-4 bg-primary text-background-dark px-10 py-4 font-black uppercase tracking-widest hover:pr-12 transition-all" type="submit">
                  Submit Inquiry via WhatsApp
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Right Side: Details & Map */}
        <section className="w-full lg:w-1/2 bg-surface-dark flex flex-col">
          <div className="p-8 md:p-16 lg:p-24 flex-grow flex flex-col justify-center gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Flagship Boutique</h3>
                <p className="text-white text-lg font-light leading-relaxed">
                  Heritage House, Sector 12<br/>
                  High Street Arcade<br/>
                  Mumbai, India
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Direct Contact</h3>
                  <a href="https://wa.me/9198216761304" target="_blank" rel="noopener noreferrer" className="text-white text-lg font-light hover:text-primary transition-colors">98216761304</a>
                </div>
                <div>
                  <h3 className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Electronic Mail</h3>
                  <p className="text-white text-lg font-light">concierge@jainjewels.com</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder Visual */}
            <div className="relative w-full h-[400px] bg-background-dark overflow-hidden">
              <div 
                className="absolute inset-0 grayscale invert opacity-10" 
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-7LqsBJl1gekR-Pcu3SdurLbz28n-gBVQDx1ixnL6-fOGNb91TnpRAoU1C1AH3Dr-l8YSHuqV5H5pTPHn0BVTYgv1k0P0zW50Wrv1fYs2Bg4qQ0tIDDBRabvGbgedQUUxmjDGEviGbi2i433v9TufstqF2_Ic_yJNfAHd69unopzPBORM4xtsjMReCmx4_Q_Sudrdyq72SB0doB4qsjIJBfSVEYpXdf3WZn8HrEk7Ly3vSn3-KOMeH2yaCNGnoPmWQRC4eUiwbjgR')", backgroundSize: 'cover'}}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full animate-ping"></div>
                  <div className="relative bg-primary text-background-dark p-2 rounded-full">
                    <span className="material-symbols-outlined text-2xl font-bold">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
