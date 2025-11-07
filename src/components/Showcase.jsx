import React, { useMemo, useState } from 'react';

const ITEMS = [
  { id: 1, title: 'Robotic Arm Assembly', cat: 'Industrial', media: 'video', src: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvdGljJTIwQXJtJTIwQXNzZW1ibHl8ZW58MHwwfHx8MTc2MjUxMjQyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Gearbox Housing', cat: 'Mechanical Parts', media: 'image', src: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvdGljJTIwQXJtJTIwQXNzZW1ibHl8ZW58MHwwfHx8MTc2MjUxMjQyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Custom Mecha Figure', cat: 'Action Figures', media: 'image', src: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvdGljJTIwQXJtJTIwQXNzZW1ibHl8ZW58MHwwfHx8MTc2MjUxMjQyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Industrial Valve 3D', cat: 'Industrial', media: 'image', src: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'CNC Fixture', cat: 'Mechanical Parts', media: 'image', src: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvdGljJTIwQXJtJTIwQXNzZW1ibHl8ZW58MHwwfHx8MTc2MjUxMjQyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Mecha Helmet', cat: 'Action Figures', media: 'image', src: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb2JvdGljJTIwQXJtJTIwQXNzZW1ibHl8ZW58MHwwfHx8MTc2MjUxMjQyNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const categories = ['All', 'Industrial', 'Mechanical Parts', 'Action Figures'];

const Showcase = () => {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => {
    return active === 'All' ? ITEMS : ITEMS.filter(i => i.cat === active);
  }, [active]);

  return (
    <section id="showcase" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Portofolio</h2>
            <p className="mt-2 max-w-xl text-neutral-300">Galeri interaktif model 3D dan render untuk proyek industrial dan action figure.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm transition ${active === c ? 'border-cyan-400 bg-cyan-500 text-neutral-900' : 'border-cyan-400/30 bg-neutral-900/40 text-neutral-200 hover:border-cyan-300'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(item => (
            <div key={item.id} className="group overflow-hidden rounded-xl border border-cyan-400/20 bg-neutral-900/40">
              {item.media === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
              ) : (
                <img src={item.src} alt={item.title} className="aspect-video w-full object-cover" />
              )}
              <div className="p-4">
                <p className="text-sm text-cyan-300">{item.cat}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
