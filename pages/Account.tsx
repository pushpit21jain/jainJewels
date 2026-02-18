
import React, { useState } from 'react';
import { MOCK_ORDERS, MOCK_WISHLIST } from '../constants';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'settings'>('orders');

  const getWhatsappUrl = (name: string, id: string) => {
    const msg = encodeURIComponent(`Hello Jain Jewels, I would like to move the ${name} (ID: ${id}) from my wishlist to my bag for purchase.`);
    return `https://wa.me/9198216761304?text=${msg}`;
  };

  const handleReferral = () => {
    const msg = encodeURIComponent("Check out Jain Jewels! I've been loving their Silver Heritage collections. Have a look: https://jain-jewels-app.com");
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <section className="mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary p-1">
                <img alt="User profile" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE3FZagW4IE4pADujcyf33s4YfRfc9-Vd80kWnph6Q94CkWr2taz2IIdUIoDWNT0IjiS8-oxna1r3HoN1KostGYp1B-c4L5Jb5Y2kaBukkAfsQ2d9oiwmj9gOm7MxJn-n6BoM9ev9lhNJM_lCed3pRo5NbQF2Tto_ZzIsN7QsuQxLkR4niTx96PBUwet-IdIeWWAi0UXPrrhBYYPz3eJ7rkeXhPyL6irNdzD40_ZsRlqR1gQhCLbQI2NvkZFeLI0KxKQddPmfdF-cu" />
              </div>
              <button className="absolute bottom-1 right-1 bg-primary text-background-dark p-1.5 rounded-full flex items-center justify-center border-2 border-background-dark">
                <span className="material-symbols-outlined text-sm font-bold">edit</span>
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-1">Julianne Moore</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">
                <span className="flex items-center gap-1.5 text-primary text-sm font-semibold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-base">military_tech</span>
                  Gold Member
                </span>
                <span className="text-gray-500 text-sm">|</span>
                <span className="text-gray-400 text-sm tracking-wide">1,250 Loyalty Points</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleReferral}
              className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-primary/20 transition-all"
            >
              Refer a Friend via WhatsApp
            </button>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button 
            onClick={() => setActiveTab('orders')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'orders' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-lg">history</span>
            Order History
          </button>
          <button 
            onClick={() => setActiveTab('wishlist')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'wishlist' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-lg">favorite</span>
            Wishlist
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'settings' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-lg">settings</span>
            Profile Settings
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Orders</h3>
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                <div className="p-6 flex flex-col lg:flex-row gap-8">
                  <div className="w-full lg:w-48 h-32 bg-background-dark rounded-lg overflow-hidden shrink-0">
                    <img alt={order.items[0].name} className="w-full h-full object-cover" src={order.items[0].image} />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold uppercase tracking-tighter text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">{order.status}</span>
                          <span className="text-xs text-gray-500 font-medium">Order #{order.id}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white leading-tight">{order.items[0].name}</h4>
                        <p className="text-sm text-gray-400 mt-1 italic">Placed on {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white leading-none">${order.total.toLocaleString()}.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_WISHLIST.map(item => (
              <div key={item.id} className="group relative">
                <div className="aspect-[4/5] bg-surface-dark rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  <button className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-sm p-2 rounded-full text-white hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-background-dark to-transparent pt-12">
                    <a 
                      href={getWhatsappUrl(item.name, item.productId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-primary text-background-dark text-xs font-bold uppercase tracking-widest rounded-lg text-center block"
                    >
                      Move to Bag via WhatsApp
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-white font-semibold text-sm">{item.name}</h5>
                  <p className="text-primary font-bold mt-1">${item.price.toLocaleString()}.00</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-surface-dark p-8 border border-white/10 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-8">Personal Information</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                  <input className="w-full bg-background-dark border-white/10 text-white rounded-lg p-3 focus:ring-1 focus:ring-primary" defaultValue="Julianne" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                  <input className="w-full bg-background-dark border-white/10 text-white rounded-lg p-3 focus:ring-1 focus:ring-primary" defaultValue="Moore" />
                </div>
              </div>
              <button className="bg-primary text-background-dark px-10 py-3 rounded-lg font-bold uppercase text-[10px] tracking-widest hover:brightness-110">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Account;
