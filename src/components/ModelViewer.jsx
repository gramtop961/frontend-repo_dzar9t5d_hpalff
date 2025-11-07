import React from 'react';
import Spline from '@splinetool/react-spline';
import { X } from 'lucide-react';

const ModelViewer = ({ open, onClose, scene, title = '3D Model' }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative z-[101] mx-4 w-full max-w-5xl overflow-hidden rounded-xl border border-cyan-400/20 bg-neutral-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-cyan-400/10 px-4 py-3">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-400/20 bg-neutral-800 text-neutral-200 hover:border-cyan-300 hover:text-white"
            aria-label="Close 3D Viewer"
          >
            <X size={18} />
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;
