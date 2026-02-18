
import React, { useState, ChangeEvent, useEffect } from 'react';
import { PRODUCTS, HOME_PAGE_DATA } from '../constants';
import { Product } from '../types';

const Admin: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'add' | 'manage' | 'home'>('add');

  // Home Config State
  const [homeConfig, setHomeConfig] = useState(HOME_PAGE_DATA);

  // Product Form State
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    collection: 'Jain Heritage',
    price: 0,
    description: '',
    material: 'Sterling Silver',
    category: 'Rings' as const,
    image: '',
    isSold: false
  });

  // Inventory State (initialized from constants)
  const [inventory, setInventory] = useState<Product[]>(PRODUCTS);
  const [generatedCode, setGeneratedCode] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Check for existing session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('jain_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const SECRET_KEY = "JainAdmin2024"; 
    if (password === SECRET_KEY) {
      setIsAuthenticated(true);
      setLoginError(false);
      sessionStorage.setItem('jain_admin_auth', 'true');
    } else {
      setLoginError(true);
      setPassword('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleHomeConfigChange = (section: string, field: string, value: string, index?: number) => {
    setHomeConfig(prev => {
      const next = { ...prev };
      if (section === 'hero') {
        (next.hero as any)[field] = value;
      } else if (section === 'featuredCollections' && index !== undefined) {
        (next.featuredCollections[index] as any)[field] = value;
      }
      return next;
    });
  };

  const toggleSignatureProduct = (id: string) => {
    setHomeConfig(prev => {
      const next = { ...prev };
      if (next.signatureListIds.includes(id)) {
        next.signatureListIds = next.signatureListIds.filter(sid => sid !== id);
      } else if (next.signatureListIds.length < 4) {
        next.signatureListIds = [...next.signatureListIds, id];
      }
      return next;
    });
  };

  const generateHomeCode = () => {
    const code = `export const HOME_PAGE_DATA = ${JSON.stringify(homeConfig, null, 2)};`;
    setGeneratedCode(code);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAddCode = () => {
    const code = `  {
    id: '${newProduct.id || Date.now().toString()}',
    name: '${newProduct.name}',
    collection: '${newProduct.collection}',
    price: ${newProduct.price},
    description: '${newProduct.description.replace(/'/g, "\\'")}',
    material: '${newProduct.material}',
    image: '${newProduct.image}',
    category: '${newProduct.category}',
    isNew: true,
    isSold: ${newProduct.isSold}
  },`;
    setGeneratedCode(code);
  };

  const toggleSoldStatus = (id: string) => {
    setInventory(prev => prev.map(p => 
      p.id === id ? { ...p, isSold: !p.isSold } : p
    ));
  };

  const deleteFromInventory = (id: string) => {
    if (window.confirm('Are you sure you want to remove this piece from the digital archive?')) {
      setInventory(prev => prev.filter(p => p.id !== id));
    }
  };

  const exportToExcel = () => {
    const headers = ['ID', 'Name', 'Collection', 'Price', 'Material', 'Category', 'Status'];
    const rows = inventory.map(p => [
      p.id,
      `"${p.name.replace(/"/g, '""')}"`,
      `"${p.collection.replace(/"/g, '""')}"`,
      p.price,
      `"${p.material.replace(/"/g, '""')}"`,
      p.category,
      p.isSold ? 'Sold' : 'Available'
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `JainJewels_Inventory_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const generateFullInventoryCode = () => {
    const code = `export const PRODUCTS: Product[] = [\n${inventory.map(p => `  {
    id: '${p.id}',
    name: '${p.name}',
    collection: '${p.collection}',
    price: ${p.price},
    description: '${p.description.replace(/'/g, "\\'")}',
    material: '${p.material}',
    image: '${p.image}',
    category: '${p.category}'${p.isNew ? ',\n    isNew: true' : ''}${p.isSold ? ',\n    isSold: true' : ''}
  }`).join(',\n')}\n];`;
    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center p-6 -mt-20">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-6xl animate-pulse">diamond</span>
            <h1 className="serif-text text-3xl font-bold uppercase tracking-widest text-white">Atelier Access</h1>
            <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Authorized Personnel Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 bg-surface-dark p-10 border border-white/5 rounded-sm">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="ENTER ACCESS KEY" 
              className={`w-full bg-background-dark border ${loginError ? 'border-red-500' : 'border-white/10'} focus:border-primary text-white text-center py-4 tracking-[0.5em] text-xs outline-none transition-all`}
            />
            <button type="submit" className="w-full bg-primary text-background-dark font-black py-4 uppercase tracking-[0.2em] text-[10px] hover:brightness-110">Verify Identity</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-dark text-white min-h-screen pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">Internal Tools</span>
            <h1 className="serif-text text-4xl font-bold">Atelier Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-dark p-1 rounded-sm flex">
              <button onClick={() => { setActiveTab('add'); setGeneratedCode(''); }} className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === 'add' ? 'bg-primary text-background-dark' : 'text-slate-400 hover:text-white'}`}>Add Item</button>
              <button onClick={() => { setActiveTab('manage'); setGeneratedCode(''); }} className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === 'manage' ? 'bg-primary text-background-dark' : 'text-slate-400 hover:text-white'}`}>Inventory</button>
              <button onClick={() => { setActiveTab('home'); setGeneratedCode(''); }} className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${activeTab === 'home' ? 'bg-primary text-background-dark' : 'text-slate-400 hover:text-white'}`}>Home Config</button>
            </div>
            <button onClick={() => { setIsAuthenticated(false); sessionStorage.removeItem('jain_admin_auth'); }} className="text-[10px] uppercase tracking-widest text-slate-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 font-bold">Logout</button>
          </div>
        </header>

        {activeTab === 'add' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Add Form */}
            <section className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Unique ID</label>
                  <input name="id" value={newProduct.id} onChange={handleInputChange} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none transition-colors" placeholder="e.g. 15" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Price ($)</label>
                  <input name="price" type="number" value={newProduct.price} onChange={handleInputChange} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Product Name</label>
                <input name="name" value={newProduct.name} onChange={handleInputChange} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none transition-colors" placeholder="Royal Silver Band" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Category</label>
                  <select name="category" value={newProduct.category} onChange={handleInputChange} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none transition-colors appearance-none">
                    {['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Watches', 'Chains', 'Kada', 'Bangles', 'Payal', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Collection</label>
                  <input name="collection" value={newProduct.collection} onChange={handleInputChange} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-primary/70 mb-2 block font-bold">Description</label>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} rows={3} className="w-full bg-surface-dark border border-white/10 rounded p-3 text-sm focus:border-primary outline-none resize-none transition-colors" placeholder="Describe the craftsmanship..." />
              </div>
              
              <div className="relative group border-2 border-dashed border-white/10 rounded p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-all cursor-pointer bg-white/[0.02]">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                <span className="material-symbols-outlined text-4xl text-slate-500 mb-2 group-hover:text-primary transition-colors">add_a_photo</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest group-hover:text-slate-300">Click to upload image (Base64)</span>
                {newProduct.image && (
                  <div className="mt-4 flex flex-col items-center">
                    <p className="text-primary text-[8px] font-black uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">Image Data Captured ✓</p>
                    <img src={newProduct.image} className="w-20 h-20 object-cover mt-4 rounded-sm border border-white/10 shadow-xl" alt="Captured" />
                  </div>
                )}
              </div>
              
              <button onClick={generateAddCode} className="w-full bg-primary text-background-dark font-black py-4 rounded-sm uppercase tracking-widest text-[10px] hover:brightness-110 shadow-lg shadow-primary/5 transition-all">Generate Code Block</button>
            </section>

            {/* Preview Column */}
            <section className="space-y-6">
              <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-50">Live Product Card Preview</h3>
              <div className="aspect-[4/5] bg-surface-dark rounded-sm border border-white/10 overflow-hidden relative shadow-2xl">
                {newProduct.image ? (
                  <img src={newProduct.image} className="w-full h-full object-cover transition-all" alt="Preview" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 gap-4">
                    <span className="material-symbols-outlined text-5xl opacity-20">image</span>
                    <p className="italic text-xs font-light tracking-wide">Waiting for visual data...</p>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-background-dark/80 backdrop-blur-md p-6 border border-white/5 rounded-sm">
                  <p className="text-[8px] text-primary font-bold uppercase tracking-[0.3em] mb-1">{newProduct.collection}</p>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white truncate">{newProduct.name || 'Untitled Masterpiece'}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-primary font-black text-xs">${newProduct.price.toLocaleString()}</p>
                    <span className="text-[8px] text-slate-500 uppercase tracking-widest">{newProduct.category}</span>
                  </div>
                </div>
              </div>
              
              {generatedCode && (
                <div className="relative animate-fade-in space-y-2">
                  <p className="text-[10px] text-emerald-500 uppercase font-bold tracking-widest">Generated Object:</p>
                  <pre className="bg-black/50 border border-emerald-500/30 rounded p-4 text-[10px] font-mono overflow-x-auto max-h-64 whitespace-pre-wrap text-emerald-200">
                    {generatedCode}
                  </pre>
                  <button onClick={copyToClipboard} className="w-full bg-emerald-500 text-black py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors">
                    {copySuccess ? 'Copied to Clipboard!' : 'Copy Code Block'}
                  </button>
                </div>
              )}
            </section>
          </div>
        ) : activeTab === 'manage' ? (
          <div className="space-y-12">
            {/* Inventory Management Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-surface-dark p-6 border border-white/5 rounded-sm gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-white font-bold uppercase tracking-[0.2em]">{inventory.length} Pieces in Digital Catalog</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Active Stock Monitoring</p>
              </div>
              <button 
                onClick={exportToExcel}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-sm border border-white/10 transition-all text-[10px] uppercase font-black tracking-widest"
              >
                <span className="material-symbols-outlined text-base">download</span>
                Download Inventory Sheet (CSV)
              </button>
            </div>

            {/* Manage Inventory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {inventory.map(p => (
                <div key={p.id} className={`bg-surface-dark border border-white/5 rounded-sm p-4 group relative transition-all ${p.isSold ? 'grayscale opacity-60' : ''}`}>
                  <div className="aspect-square mb-4 overflow-hidden rounded-sm bg-background-dark relative">
                    <img src={p.image} className={`w-full h-full object-cover transition-opacity ${p.isSold ? 'opacity-40' : 'opacity-70 group-hover:opacity-100'}`} />
                    {p.isSold && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="bg-red-500 text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 rotate-[-15deg] shadow-2xl border border-white/20 whitespace-nowrap">
                          Archived / Sold
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 mb-4">
                    <h4 className="text-[10px] uppercase tracking-widest font-black truncate text-white">{p.name}</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest">{p.collection}</p>
                  </div>
                  <div className="flex justify-between items-center gap-3 pt-4 border-t border-white/5">
                    <p className="text-primary text-xs font-black">${p.price.toLocaleString()}</p>
                    <button 
                      onClick={() => toggleSoldStatus(p.id)}
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-sm border transition-all flex-grow ${p.isSold ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'}`}
                    >
                      {p.isSold ? 'Relist Item' : 'Mark Sold'}
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => deleteFromInventory(p.id)}
                    className="absolute top-6 right-6 bg-red-600/90 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20"
                  >
                    <span className="material-symbols-outlined text-sm font-bold">delete</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-surface-dark border border-white/5 p-12 text-center rounded-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 opacity-30">save</span>
              <h3 className="serif-text text-2xl mb-4 font-bold">Commit Changes</h3>
              <p className="text-slate-400 text-sm mb-10 font-light max-w-xl mx-auto leading-relaxed">After updating statuses, relisting items, or adding new pieces, generate the full array below. Replace the entire <code>PRODUCTS</code> variable in <code>constants.ts</code> to permanently save your inventory state.</p>
              <button 
                onClick={generateFullInventoryCode}
                className="bg-white text-background-dark font-black px-16 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-primary transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                Generate Final constants.ts Code
              </button>

              {generatedCode && (
                <div className="mt-12 relative text-left">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-emerald-500 uppercase font-black tracking-widest">Full Constants File Content:</p>
                    <button 
                      onClick={copyToClipboard}
                      className="bg-emerald-500 text-black px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-400 transition-colors"
                    >
                      {copySuccess ? 'Copied Code!' : 'Copy Full File'}
                    </button>
                  </div>
                  <pre className="bg-black/50 border border-emerald-500/30 rounded p-8 text-[10px] font-mono overflow-x-auto max-h-[600px] whitespace-pre text-emerald-200 shadow-inner">
                    {generatedCode}
                  </pre>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-16 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Hero Editor */}
              <section className="bg-surface-dark p-10 border border-white/10 rounded-sm space-y-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">tv</span>
                  <h3 className="text-primary text-[10px] font-black uppercase tracking-widest">Hero Branding Editor</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 block font-bold">Main Headline</label>
                    <input value={homeConfig.hero.heading} onChange={e => handleHomeConfigChange('hero', 'heading', e.target.value)} className="w-full bg-background-dark border border-white/10 text-white p-4 text-sm focus:border-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 block font-bold">Narrative Subtext</label>
                    <textarea value={homeConfig.hero.subheading} onChange={e => handleHomeConfigChange('hero', 'subheading', e.target.value)} className="w-full bg-background-dark border border-white/10 text-white p-4 text-sm focus:border-primary h-32 outline-none transition-all resize-none" />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-widest text-slate-500 mb-2 block font-bold">Hero Background Asset URL</label>
                    <input value={homeConfig.hero.image} onChange={e => handleHomeConfigChange('hero', 'image', e.target.value)} className="w-full bg-background-dark border border-white/10 text-white p-4 text-sm focus:border-primary outline-none transition-all" />
                  </div>
                </div>
              </section>

              {/* Collections Editor */}
              <section className="bg-surface-dark p-10 border border-white/10 rounded-sm space-y-10 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">grid_on</span>
                  <h3 className="text-primary text-[10px] font-black uppercase tracking-widest">Curated Grid Display</h3>
                </div>
                <div className="space-y-8">
                  {homeConfig.featuredCollections.map((coll, idx) => (
                    <div key={idx} className="p-6 border border-white/5 bg-black/30 space-y-4 rounded-sm">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-[9px] text-primary uppercase font-black tracking-widest">Spotlight #{idx + 1}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[8px] uppercase tracking-widest text-slate-600 mb-1 block">Link Category</label>
                          <select value={coll.category} onChange={e => handleHomeConfigChange('featuredCollections', 'category', e.target.value, idx)} className="w-full bg-background-dark border border-white/10 text-white text-[10px] p-3 outline-none focus:border-primary">
                            {['Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Watches', 'Chains', 'Kada', 'Bangles', 'Payal', 'Other'].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[8px] uppercase tracking-widest text-slate-600 mb-1 block">Display Name</label>
                          <input value={coll.title} onChange={e => handleHomeConfigChange('featuredCollections', 'title', e.target.value, idx)} className="w-full bg-background-dark border border-white/10 text-white text-[10px] p-3 outline-none focus:border-primary" placeholder="e.g. Heritage Rings" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[8px] uppercase tracking-widest text-slate-600 mb-1 block">Banner Image Source</label>
                        <input value={coll.image} onChange={e => handleHomeConfigChange('featuredCollections', 'image', e.target.value, idx)} className="w-full bg-background-dark border border-white/10 text-white text-[10px] p-3 outline-none focus:border-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Signature List Selection */}
            <section className="bg-surface-dark p-10 border border-white/10 rounded-sm shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                  <div>
                    <h3 className="text-primary text-[10px] font-black uppercase tracking-widest">Signature Selection Pool</h3>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Chosen: {homeConfig.signatureListIds.length} of 4 Required</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 uppercase font-light tracking-widest max-w-sm text-center md:text-right italic">Select the top 4 pieces to be showcased in the "Curated for You" home section.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {inventory.map(p => (
                  <button 
                    key={p.id}
                    onClick={() => toggleSignatureProduct(p.id)}
                    className={`group relative aspect-square overflow-hidden border-2 transition-all rounded-sm ${homeConfig.signatureListIds.includes(p.id) ? 'border-primary' : 'border-white/5 opacity-40 hover:opacity-100'}`}
                  >
                    <img src={p.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={p.name} />
                    {homeConfig.signatureListIds.includes(p.id) && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="bg-primary text-background-dark rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-background-dark">
                          <span className="material-symbols-outlined text-xs font-black">done_all</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-[7px] font-black uppercase truncate text-white">{p.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <div className="text-center space-y-6">
              <div className="w-20 h-px bg-primary/30 mx-auto"></div>
              <button 
                onClick={generateHomeCode} 
                className="bg-primary text-background-dark font-black px-16 py-5 rounded-sm uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-white hover:-translate-y-1 transition-all active:translate-y-0"
              >
                Generate Updated Home Config Code
              </button>
              
              {generatedCode && (
                <div className="relative animate-fade-in mt-12 text-left">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] text-emerald-500 uppercase font-black tracking-widest">Paste this into constants.ts:</p>
                    <button 
                      onClick={copyToClipboard} 
                      className="bg-emerald-500 text-black px-8 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-emerald-400 transition-colors"
                    >
                      {copySuccess ? 'Copied Successfully!' : 'Copy Config Code'}
                    </button>
                  </div>
                  <pre className="bg-black/50 border border-emerald-500/30 p-8 rounded-sm text-[10px] text-emerald-200 overflow-x-auto whitespace-pre font-mono shadow-inner">
                    {generatedCode}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
