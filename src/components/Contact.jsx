import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Hubungi Kami</h2>
          <p className="mt-3 text-neutral-300">Tertarik bekerja sama atau butuh penawaran khusus? Kirimkan detail kebutuhan Anda.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form className="rounded-xl border border-cyan-400/20 bg-neutral-900/40 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Nama</label>
                <input type="text" className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input type="email" className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none" placeholder="email@domain.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-neutral-300">Perusahaan (opsional)</label>
              <input type="text" className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none" placeholder="Nama perusahaan" />
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-neutral-300">Pesan</label>
              <textarea className="min-h-[120px] w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none" placeholder="Ceritakan kebutuhan desain / prototyping Anda" />
            </div>
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-cyan-400">
              <MessageSquare size={16} />
              Kirim Permintaan
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-xl border border-cyan-400/20 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-3 text-neutral-300"><Mail size={18} className="text-cyan-300" /> contact@mechavision3d.com</div>
              <div className="mt-3 flex items-center gap-3 text-neutral-300"><Phone size={18} className="text-cyan-300" /> +62 812-3456-7890</div>
              <div className="mt-3 flex items-center gap-3 text-neutral-300"><MapPin size={18} className="text-cyan-300" /> Jakarta, Indonesia</div>
            </div>
            <div className="overflow-hidden rounded-xl border border-cyan-400/20">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6441599935883!2d106.827153!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4e3f0b6f1%3A0x6d1d0c0f6b!2sMonas!5e0!3m2!1sen!2sid!4v1610000000000!5m2!1sen!2sid"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex gap-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="rounded-md border border-green-400/40 bg-green-500/10 px-4 py-2 text-sm text-green-300 hover:bg-green-500/20">WhatsApp</a>
              <a href="#" className="rounded-md border border-cyan-400/40 bg-neutral-900/60 px-4 py-2 text-sm text-cyan-300 hover:border-cyan-300">LinkedIn</a>
              <a href="#" className="rounded-md border border-cyan-400/40 bg-neutral-900/60 px-4 py-2 text-sm text-cyan-300 hover:border-cyan-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
