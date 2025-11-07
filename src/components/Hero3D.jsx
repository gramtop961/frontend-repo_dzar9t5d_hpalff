import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (won't block 3D interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/30 to-neutral-950/90" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 pb-16 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-neutral-900/60 px-3 py-1 text-cyan-300 backdrop-blur">
          <Rocket size={16} className="text-cyan-300" />
          <span className="text-xs font-medium tracking-wider">MechaVision 3D</span>
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Transforming Industrial Design into <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Interactive Reality</span>
        </h1>
        <p className="max-w-2xl text-sm text-neutral-300 md:text-base">
          Dynamic 3D experiences with polished metal forms and neon accents. Rotate, zoom, and explore models in real time
          for industrial concepts and collectible mechas.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Explore Portfolio
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-neutral-900/60 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Request Custom Design
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
