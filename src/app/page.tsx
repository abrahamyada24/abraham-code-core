'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Monitor, Wrench, HardDrive, Clock, MapPin, Phone, Mail, Instagram, ChevronRight, Menu, X, MessageCircle } from 'lucide-react';

export default function AbrahamCodeCore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ComputerStore",
      "name": "Abraham Code & Core",
      "image": "https://example.com/logo.jpg",
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
      "url": "#",
      "sameAs": [
        "https://www.instagram.com/abrahamyada?igsh=MXZ6dnBlMGp5Mzkzcw=="
      ]
    });
    document.head.appendChild(script);

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Abraham Code & Core - Servis komputer profesional di Madiun. Layanan: Fullstack Web Developer, Install OS Windows & Linux, Repair Software, Service Hardware. Buka Senin-Jumat 07:00-21:00. Hubungi: 0851-5649-2409';
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'servis komputer madiun, service laptop madiun, install windows madiun, web developer madiun, repair komputer madiun, upgrade laptop madiun, Abraham Code Core';
    document.head.appendChild(metaKeywords);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Abraham Code & Core - Servis Komputer Profesional Madiun';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Servis komputer, install OS, web developer, dan upgrade hardware di Madiun. Buka Senin-Jumat 07:00-21:00';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'business.business';
    document.head.appendChild(ogType);

    document.title = 'Abraham Code & Core - Servis Komputer & Web Developer Madiun';

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Fullstack Web Developer",
      description: "Pembuatan website profesional dengan teknologi terkini untuk kebutuhan bisnis Anda"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Install OS & Repair Software",
      description: "Instalasi ulang Windows OS dan Linux, serta perbaikan masalah software komputer"
    },
    {
      icon: <HardDrive className="w-12 h-12" />,
      title: "Hardware Service",
      description: "Service, pasang, dan upgrade komputer dan laptop dengan harga terjangkau"
    }
  ];

  const schedule = [
    { day: "Selasa", hours: "07.00 - 21.00" },
    { day: "Rabu", hours: "07.00 - 21.00" },
    { day: "Kamis", hours: "07.00 - 21.00" },
    { day: "Jumat", hours: "07.00 - 21.00" },
    { day: "Sabtu", hours: "07.00 - 11.00" },
    { day: "Minggu", hours: "Tutup" },
    { day: "Senin", hours: "07.00 - 21.00" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Abraham Code & Core Logo"
                  width={40}
                  height={40}
                  className="rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-lg hidden" aria-hidden="true">
                  A
                </div>
              </div>
              <div>
                <h1 className="font-bold text-xl">Abraham Code & Core</h1>
                <p className="text-xs text-gray-300">Solusi IT Anda</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition">Home</a>
              <a href="#services" className="hover:text-cyan-400 transition">Layanan</a>
              <a href="#schedule" className="hover:text-cyan-400 transition">Jam Buka</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Kontak</a>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 hover:text-cyan-400 transition">Home</a>
              <a href="#services" className="block py-2 hover:text-cyan-400 transition">Layanan</a>
              <a href="#schedule" className="block py-2 hover:text-cyan-400 transition">Jam Buka</a>
              <a href="#contact" className="block py-2 hover:text-cyan-400 transition">Kontak</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/caro.png')" }}></div>
        {/* Overlay agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Konten teks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Abraham {`"`}Code & Core{`"`}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Solusi IT Anda di Madiun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6285156492409"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-500 px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2" /> Chat WhatsApp
              </a>
              <a
                href="#services"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center justify-center"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">292+</div>
              <div className="text-gray-600">Interaksi Pelanggan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">7 Hari</div>
              <div className="text-gray-600">Layanan Seminggu</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <p className="text-gray-600 text-lg">Solusi profesional untuk semua kebutuhan teknologi Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Jam Operasional</h2>
            <p className="text-gray-600">Kami siap melayani Anda setiap hari</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-xl overflow-hidden">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 ${index !== schedule.length - 1 ? 'border-b border-blue-100' : ''} ${item.hours === 'Tutup' ? 'bg-gray-100' : 'hover:bg-white'} transition`}
              >
                <span className="font-semibold text-slate-900">{item.day}</span>
                <span className={`${item.hours === 'Tutup' ? 'text-red-600' : 'text-blue-600'} font-medium`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-green-600 font-semibold inline-flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Buka Sekarang - Tutup pukul 21.00
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-gray-300 text-lg">Kami siap membantu kebutuhan teknologi Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                  <p className="text-gray-300">
                    Jl. Seroja No.49 A, RT.009/RW.003,<br />
                    Pojoksatu, Munggut,<br />
                    Kec. Wungu, Kabupaten Madiun,<br />
                    Jawa Timur 63181
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telepon / WhatsApp</h3>
                  <a href="tel:085156492409" className="text-gray-300 hover:text-cyan-400 transition block mb-2">
                    0851-5649-2409
                  </a>
                  <a
                    href="https://wa.me/6285156492409"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0 text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:abrahamyadaa24@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
                    abrahamyadaa24@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4">Lokasi Kami</h3>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                <iframe
                  title="Lokasi Abraham Code & Core di Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2951496057563!2d111.54614637654313!3d-7.651378492364836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf961c3de66d%3A0xb32b35355406f480!2sAbraham%20%22Code%20%26%20Core%22!5e0!3m2!1sen!2sid!4v1759410214071!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/XRLBqnyMECwvV1B88"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
              >
                Buka di Google Maps <ChevronRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Abraham {`"`}Code & Core{`"`}</h3>
            <p className="text-gray-400 mb-4">Solusi IT Anda</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.instagram.com/abrahamyada?igsh=MXZ6dnBlMGp5Mzkzcw==" className="text-gray-400 hover:text-cyan-400 transition">
                <Instagram />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Abraham Code & Core. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285156492409"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 z-50 animate-bounce"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
