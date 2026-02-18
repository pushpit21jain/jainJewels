
import React from 'react';

const Checkout: React.FC = () => {
  const handleCheckoutWhatsApp = () => {
    const msg = encodeURIComponent("Hello Jain Jewels, I have completed my delivery details on the checkout page and would like to finalize my purchase of the Aurelius Signature Watch ($12,450.00).");
    window.open(`https://wa.me/9198216761304?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Multi-step Form */}
          <div className="lg:w-3/5 space-y-12">
            <header>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Secure Checkout</span>
              </div>
              <h2 className="text-4xl font-light tracking-tight text-white">Finalize Your Acquisition</h2>
            </header>

            {/* Progress Breadcrumbs */}
            <div className="flex gap-8 border-b border-border-dark pb-4">
              <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b-2 border-primary text-primary pb-4 -mb-[18px]">
                <span className="text-[10px] flex items-center justify-center w-5 h-5 rounded-full border border-primary">1</span>
                Shipping
              </button>
              <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-500 pb-4 -mb-[18px] hover:text-slate-300">
                <span className="text-[10px] flex items-center justify-center w-5 h-5 rounded-full border border-slate-500">2</span>
                Payment
              </button>
              <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-500 pb-4 -mb-[18px] opacity-50 cursor-not-allowed">
                <span className="text-[10px] flex items-center justify-center w-5 h-5 rounded-full border border-slate-500">3</span>
                Review
              </button>
            </div>

            <div className="space-y-6">
              {/* Shipping Address */}
              <div className="border border-white/10 bg-surface-dark rounded-sm overflow-hidden">
                <div className="flex items-center justify-between p-6 bg-white/5">
                  <h3 className="text-lg font-medium tracking-wide">1. Shipping Address</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                    <input className="w-full bg-background-dark border-white/10 text-white rounded-sm py-4 px-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all" placeholder="Johnathan Doe" type="text" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Street Address</label>
                    <input className="w-full bg-background-dark border-white/10 text-white rounded-sm py-4 px-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all" placeholder="123 Luxury Avenue, Suite 400" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">City</label>
                    <input className="w-full bg-background-dark border-white/10 text-white rounded-sm py-4 px-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all" placeholder="New York" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Postal Code</label>
                    <input className="w-full bg-background-dark border-white/10 text-white rounded-sm py-4 px-4 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all" placeholder="10001" type="text" />
                  </div>
                </div>
              </div>

              {/* Payment Method - Summary View */}
              <div className="border border-white/10 bg-surface-dark/50 rounded-sm overflow-hidden opacity-60">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg font-medium tracking-wide">2. Payment Method</h3>
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-2/5">
            <div className="bg-surface-dark p-8 rounded-sm border border-white/10 sticky top-32">
              <h3 className="text-xl font-light tracking-wide mb-8">Your Order</h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 group">
                  <div className="w-24 h-24 bg-background-dark overflow-hidden rounded-sm border border-white/10 flex-shrink-0">
                    <img alt="Watch" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm-RTQ1fZ0FceGcEwJUUxWDQkfsFxYH0vn2icX22mEf3tgJviYJ7-FE-8BrfI-04btYEd8C_-GX-ICiPrI73Ouru-y34HnL2hDnfJXIjP6DM-eiUpUnS_4blY7M2KlJ5arkKCqavviM--Qkn78tZHmuclJlBZWr64TfXCnLMN1_ohZc8wRL2FAz7pzxxs0aFYSxXW4VUfHGRpx5AE5bF_L82z5KoxuUZFSEF7861BkKmkEnzjRoOmN7CH3hpfn-eAxCjU3lNkdOUXI" />
                  </div>
                  <div className="flex-1 py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium tracking-wide">Aurelius Signature Watch</h4>
                        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Matte Black / Gold</p>
                      </div>
                      <p className="text-sm font-bold">$12,450.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Subtotal</span>
                  <span className="font-bold">$12,450.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Insured Shipping</span>
                  <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Estimated Taxes</span>
                  <span className="font-bold">$871.50</span>
                </div>
                <div className="flex justify-between text-xl border-t border-white/10 pt-6 mt-6">
                  <span className="font-light tracking-wide">Total</span>
                  <span className="font-bold text-primary">$13,321.50</span>
                </div>
              </div>

              <button 
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-primary hover:bg-white text-black font-extrabold text-sm tracking-[0.25em] uppercase py-5 mt-10 transition-all shadow-xl shadow-primary/10"
              >
                Complete Purchase via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
