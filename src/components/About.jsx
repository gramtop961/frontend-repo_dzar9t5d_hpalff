import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tentang Kami</h2>
            <p className="mt-4 text-neutral-300">
              Kami adalah tim desainer 3D dan engineer yang menggabungkan estetika futuristik dengan ketepatan
              mekanikal. Keahlian kami mencakup pipeline CAD, simulasi, hingga 3D printing presisi tinggi.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Teknologi CAD tingkat lanjut</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> 3D printing presisi tinggi dan finishing profesional</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Visualisasi fotorealistik untuk presentasi dan pemasaran</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg border border-cyan-400/20 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <div className="aspect-[4/5] rounded-lg border border-cyan-400/20 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <div className="aspect-[4/5] rounded-lg border border-cyan-400/20 bg-gradient-to-br from-neutral-800 to-neutral-900" />
            <div className="aspect-square rounded-lg border border-cyan-400/20 bg-gradient-to-br from-neutral-800 to-neutral-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
