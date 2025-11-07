import React from 'react';
import { Cog, Printer, Cube, Camera } from 'lucide-react';

const SERVICES = [
  {
    icon: Cog,
    title: 'Desain 3D Mekanikal',
    desc: 'Perancangan komponen dan mekanisme presisi menggunakan alur CAD tingkat lanjut untuk kebutuhan manufaktur.',
  },
  {
    icon: Printer,
    title: 'Pembuatan Prototipe Industrial',
    desc: 'Rapid prototyping dengan 3D printing multi-material dan finishing yang siap uji fungsional.',
  },
  {
    icon: Cube,
    title: 'Custom Action Figure',
    desc: 'Desain karakter, articulations, dan produksi 3D printing untuk kolektor dan brand kolaborasi.',
  },
  {
    icon: Camera,
    title: 'Visualisasi & Marketing 3D',
    desc: 'Render fotorealistik, animasi produk, dan aset promosi berbasis 3D untuk kampanye pemasaran.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Layanan <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MechaVision 3D</span>
          </h2>
          <p className="mt-3 text-neutral-300">
            Solusi ujung-ke-ujung untuk desain mekanikal, prototyping, hingga visualisasi pemasaran.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-cyan-400/20 bg-neutral-900/40 p-6 backdrop-blur transition hover:border-cyan-300/50 hover:shadow-[0_0_30px_-8px] hover:shadow-cyan-400/40"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-neutral-900">
                <Icon size={22} className="text-neutral-900" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
