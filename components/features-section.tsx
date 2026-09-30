"use client"

import React, { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  Smartphone,
  Clock,
  KeyRound,
  Sparkles,
  ShieldCheck,
  Zap,
  RotateCcw,
  Search,
  Activity,
  CheckCircle2,
} from "lucide-react"

interface FeatureItem {
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  tag: string
}

const featuresList: FeatureItem[] = [
  // Kolom 1
  {
    icon: Smartphone,
    title: "Nyaman Dilihat di HP",
    subtitle: "Mobile-First Design",
    description: "Lebih dari 90% pengguna membuka website dari HP. Kami pastikan tampilannya nyaman dilihat dan mudah dimengerti.",
    tag: "Aksesibilitas",
  },
  {
    icon: Clock,
    title: "Selesai Sesuai Janji",
    subtitle: "Pengerjaan Cepat",
    description: "Proses produksi kilat dan terstruktur. Website Anda langsung siap dipakai tanpa drama menunggu berminggu-minggu.",
    tag: "Efisiensi",
  },
  {
    icon: KeyRound,
    title: "Kepemilikan 100% Penuh",
    subtitle: "Full Handover Domain & Web",
    description: "Domain dan seluruh akses website diserahkan penuh ke email Anda. Tanpa biaya sewa sistem tersembunyi, aset milik Anda seutuhnya.",
    tag: "Transparansi",
  },

  // Kolom 2
  {
    icon: Sparkles,
    title: "Desain Rapi & Elegan",
    subtitle: "Hasil Pasti Bagus",
    description: "Website yang Anda Terima Dipastikan Memiliki Tampilan Yang Terbaik.",
    tag: "Kredibilitas",
  },
  {
    icon: ShieldCheck,
    title: "Terima Beres Tanpa Ribet",
    subtitle: "Layanan All-in-One",
    description: "Anda cukup Memberi Arahan. Seluruh urusan teknis sampai website live kami yang tangani.",
    tag: "Bebas Pusing",
  },
  {
    icon: Zap,
    title: "Cepat & Ringan",
    subtitle: "Buka Tanpa Menunggu Lama",
    description: "Halaman website dirancang sangat ringan dan terbuka instan dalam hitungan detik.",
    tag: "Performa",
  },

  // Kolom 3
  {
    icon: RotateCcw,
    title: "Garansi Penyesuaian Desain",
    subtitle: "Desain tidak cocok? kami sesuaikan",
    description: "Kami pastikan tampilan website sesuai dengan kemauan Anda. Ada sesi peninjauan dan penyesuaian hingga hasilnya benar-benar pas.",
    tag: "Jaminan",
  },
  {
    icon: Search,
    title: "Mudah Ditemukan di Google",
    subtitle: "Penerapan SEO",
    description: "Penataan judul dan halaman disiapkan optimal agar website Anda lebih mudah ditemukan saat mencari di internet.",
    tag: "Visibilitas",
  },
  {
    icon: Activity,
    title: "Stabil & Aktif 24 Jam",
    subtitle: "Dapat Diakses Kapan Saja",
    description: "Website Anda selalu siap melayani pengunjung siang dan malam tanpa khawatir halaman down atau lambat dibuka.",
    tag: "Keandalan",
  },
]

function FeatureMarqueeColumn({
  items,
  duration = 16,
  className = "",
}: {
  items: FeatureItem[]
  duration?: number
  className?: string
}) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className={`relative h-[560px] overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className="flex flex-col gap-5 will-change-transform"
        style={{
          animation: `marquee-scroll ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => {
          return (
            <div
              key={idx}
              className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(59,130,246,0.12)] hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 w-full select-none"
            >
              {/* Title & Subtitle */}
              <h4 className="text-lg sm:text-[19px] font-black text-[#121212] tracking-tight leading-snug group-hover:text-[#3B82F6] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-[#3B82F6] font-semibold mt-0.5 mb-3">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Bottom tag indicator */}
              <div className="mt-4 pt-3.5 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-mono text-[#3B82F6]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="font-bold">Jayantara Standard</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative pt-14 pb-20 sm:pt-16 sm:pb-28 bg-white overflow-hidden border-t border-zinc-100 noise-overlay"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#121212] tracking-tight leading-[1.1]"
            >
              Mengapa Memilih <span className="text-[#3B82F6]">Jayantara?</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg font-mono text-[#121212]/60 mt-4 leading-relaxed max-w-xl mx-auto"
          >
            Bukan sekadar website online, tapi alat bisnis yang siap mendatangkan calon pembeli langsung ke chat Anda.
          </motion.p>
        </div>

        {/* 3-Column Infinite Vertical Marquee */}
        <div className="relative max-w-6xl mx-auto flex justify-center items-center">
          
          {/* Continuous Ambient Shadow Bed that fills the gaps seamlessly */}
          <div 
            className="absolute inset-y-8 inset-x-4 rounded-[48px] pointer-events-none"
            style={{
              boxShadow: "0 25px 70px 10px rgba(0, 0, 0, 0.07), 0 10px 30px 5px rgba(0, 0, 0, 0.04)",
              background: "rgba(0, 0, 0, 0.015)",
              filter: "blur(20px)",
            }}
          />

          {/* Top and Bottom Clean Gradient Fade Masks */}
          <div
            className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            {/* Column 1 (Exact VAE speed: 15s) */}
            <FeatureMarqueeColumn
              items={[featuresList[0], featuresList[1], featuresList[2]]}
              duration={15}
              className="flex-1"
            />

            {/* Column 2 (Exact VAE speed: 12s) */}
            <FeatureMarqueeColumn
              items={[featuresList[3], featuresList[4], featuresList[5]]}
              duration={12}
              className="flex-1 hidden md:block"
            />

            {/* Column 3 (Exact VAE speed: 18s) */}
            <FeatureMarqueeColumn
              items={[featuresList[6], featuresList[7], featuresList[8]]}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
