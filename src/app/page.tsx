import type { Metadata } from 'next';
import Image from 'next/image';
import { Monitor, Wrench, HardDrive, Clock, MapPin, Phone, Mail, Instagram, ChevronRight } from 'lucide-react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Abraham Code & Core - Servis Komputer & Web Developer Madiun',
  description: 'Servis komputer profesional di Madiun. Layanan: Fullstack Web Developer, Install OS Windows & Linux, Repair Software, Service Hardware. Buka Senin-Jumat 07:00-21:00.',
  keywords: 'servis komputer madiun, service laptop madiun, install windows madiun, web developer madiun, repair komputer madiun, upgrade laptop madiun, Abraham Code Core',
  openGraph: {
    title: 'Abraham Code & Core - Servis Komputer Profesional Madiun',
    description: 'Servis komputer, install OS, web developer, dan upgrade hardware di Madiun. Buka Senin-Jumat 07:00-21:00',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "Abraham Code & Core",
    "image": "https://example.com/logo.jpg", // Ideally this should be a real URL
    "description": "Servis komputer profesional di Madiun. Fullstack web developer, install ulang Windows OS dan Linux, repair software, service hardware komputer dan laptop.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Seroja No.49 A, RT.009/RW.003, Pojoksatu, Munggut",
      "addressLocality": "Wungu",
      "addressRegion": "Jawa Timur",
      "postalCode": "63181",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.6298,
      "longitude": 111.5239
    },
    "telephone": "+6285156492409",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "11:00"
      }
    ],
    "priceRange": "$",
    "url": "#", // Update with real URL if available
    "sameAs": [
      "https://www.instagram.com/abrahamyada?igsh=MXZ6dnBlMGp5Mzkzcw=="
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/caro.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/50 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
            <span className="text-cyan-400 font-medium text-sm tracking-wider uppercase">Professional IT Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Abraham <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Code & Core</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Solusi digital terpercaya di Madiun. Dari pengembangan software hingga perbaikan hardware.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://wa.me/6285156492409"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center"
            >
              <span className="mr-3">
                <svg viewBox="0 0 24 24" width="24" height="24" className="fill-current">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.933.923 2.809.923 3.183 0 5.768-2.586 5.768-5.766.001-3.18-2.584-5.766-5.765-5.766zm.92 8.868c-.378 0-.584-.047-1.16-.251-.83-.294-1.926-1.055-2.735-1.996s-1.353-1.636-1.637-2.31c-.343-.815-.157-1.391.229-1.78l.492-.553c.188-.209.431-.223.578-.223.637.01 1.07.616 1.156.804.09.199.073.342-.036.563-.125.252-.257.391-.453.646-.169.22-.128.329.071.677.264.462.825 1.258 1.802 1.633.784.301 1.082.164 1.343-.123l.169-.196c.304-.383.659-.264.908-.168.25.096 1.57.747 1.666.837.096.09.117.202.102.327-.08.67-.803 1.107-1.341 1.107zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  <path d="M17.409 13.603c-.09-.096-1.385-.717-1.635-.813-.247-.096-.604-.215-.908.168l-.169.196c-.261.287-.559.424-1.343.123-.977-.375-1.538-1.171-1.802-1.633-.199-.348-.24-.457-.071-.677.196-.255.328-.394.453-.646.109-.221.126-.364.036-.563-.086-.188-.519-.794-1.156-.804-.147 0-.39.014-.578.223l-.492.553c-.386.389-.572.965-.229 1.78.284.674 1.054 1.571 2.274 2.671 2.33 2.101 4.542 1.744 4.887 1.744.538 0 1.261-.437 1.341-1.107.015-.125-.006-.237-.102-.327z" fill="white" />
                </svg>
              </span>
              Hubungi Kami
              <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg transition-all duration-300"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </header>

      {/* Stats Section - Floating Cards */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Interaksi Pelanggan", value: "300+", sub: "Total Layanan" },
            { label: "Respon Cepat", value: "24/7", sub: "Siap Membantu" },
            { label: "Kepuasan", value: "100%", sub: "Jaminan Kualitas" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 backdrop-blur-sm">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-slate-900 dark:text-white font-bold text-lg">{stat.label}</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Layanan Kami</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Kombinasi keahlian teknis dan solusi modern untuk kebutuhan personal maupun bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Monitor className="w-10 h-10" />}
              title="Fullstack Web Dev"
              description="Pembuatan website responsif dan modern. Dari landing page hingga sistem kompleks, siap meningkatkan kehadiran digital bisnis Anda."
            />
            <ServiceCard
              icon={<Wrench className="w-10 h-10" />}
              title="Software & OS"
              description="Instalasi Windows/Linux, driver, dan software penting. Perbaikan masalah sistem, virus, dan optimalisasi kinerja."
            />
            <ServiceCard
              icon={<HardDrive className="w-10 h-10" />}
              title="Hardware Service"
              description="Diagnosa dan perbaikan hardware komputer/laptop. Upgrade SSD/RAM, ganti layar, keyboard, dan maintenance rutin."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Galeri Kegiatan</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Sekilas aktivitas dan fasilitas di Abraham Code & Core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* 
                  NOTE FOR USER: 
                  To replace this image with your own Google Maps photo:
                  1. Rename your photo to 'gallery-1.jpg' (or .png)
                  2. Put it in the 'public' folder
                  3. Change src="/gallery-1.png" to src="/gallery-1.jpg" below
               */}
              <Image
                src="/gallery-1.png"
                alt="Service Komputer Madiun"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Hardware Service</span>
                <h3 className="text-white text-xl font-bold">Perbaikan Profesional</h3>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:translate-y-8">
              {/* 
                  NOTE FOR USER: 
                  To replace this image with your own Google Maps photo:
                  1. Rename your photo to 'gallery-2.jpg' (or .png)
                  2. Put it in the 'public' folder
                  3. Change src="/gallery-2.png" to src="/gallery-2.jpg" below
               */}
              <Image
                src="/gallery-2.png"
                alt="Web Development Madiun"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Web Development</span>
                <h3 className="text-white text-xl font-bold">Coding & Programming</h3>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* 
                  NOTE FOR USER: 
                  To replace this image with your own Google Maps photo:
                  1. Rename your photo to 'gallery-3.jpg' (or .png)
                  2. Put it in the 'public' folder
                  3. Change src="/gallery-3.png" to src="/gallery-3.jpg" below
               */}
              <Image
                src="/gallery-3.png"
                alt="Toko Komputer Madiun"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Workshop</span>
                <h3 className="text-white text-xl font-bold">Layanan Ramah</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-white dark:bg-slate-900 relative border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-600 mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Jam Operasional</h2>
            <p className="text-slate-600 dark:text-slate-400">Fleksibel dan siap membantu Anda</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 shadow-inner">
            <div className="space-y-4">
              {[
                { days: "Senin - Jumat", time: "07.00 - 21.00", status: "Buka" },
                { days: "Sabtu", time: "07.00 - 11.00", status: "Terbatas" },
                { days: "Minggu", time: "Tutup", status: "Tutup" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <span className="font-bold text-lg dark:text-slate-200">{item.days}</span>
                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{item.time}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${item.status === 'Buka' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      item.status === 'Tutup' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                        'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Abraham Code & Core</h3>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                Partner teknologi terpercaya Anda di Madiun. Kami menjembatani kesenjangan antara masalah IT dan solusi profesional.
              </p>
              <div className="flex gap-4">
                <SocialLink href="https://www.instagram.com/abrahamyada?igsh=MXZ6dnBlMGp5Mzkzcw==" icon={<Instagram />} label="Instagram" />
                <SocialLink href="mailto:abrahamyadaa24@gmail.com" icon={<Mail />} label="Email" />
                <SocialLink href="https://wa.me/6285156492409" icon={<Phone />} label="WhatsApp" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Kontak</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
                  <span>Jl. Seroja No.49 A, Munggut, Wungu, Madiun, Jawa Timur 63181</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                  <a href="tel:085156492409" className="hover:text-cyan-400 transition">0851-5649-2409</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Navigasi</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition">Layanan</a></li>
                <li><a href="#schedule" className="hover:text-cyan-400 transition">Jam Operasional</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Abraham Code & Core. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285156492409"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Chat via WhatsApp"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 origin-right">
          Chat Sekarang
        </span>
        <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 24 24" width="32" height="32" className="fill-white">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.933.923 2.809.923 3.183 0 5.768-2.586 5.768-5.766.001-3.18-2.584-5.766-5.765-5.766zm.92 8.868c-.378 0-.584-.047-1.16-.251-.83-.294-1.926-1.055-2.735-1.996s-1.353-1.636-1.637-2.31c-.343-.815-.157-1.391.229-1.78l.492-.553c.188-.209.431-.223.578-.223.637.01 1.07.616 1.156.804.09.199.073.342-.036.563-.125.252-.257.391-.453.646-.169.22-.128.329.071.677.264.462.825 1.258 1.802 1.633.784.301 1.082.164 1.343-.123l.169-.196c.304-.383.659-.264.908-.168.25.096 1.57.747 1.666.837.096.09.117.202.102.327-.08.67-.803 1.107-1.341 1.107zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

      <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-cyan-500 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}