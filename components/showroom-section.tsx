"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Showcase {
  id: number
  title: string
  category: string
  tagline: string
  description: string
  image: string
  liveUrl?: string
  accentColor: string
  tags: string[]
}

const showcases: Showcase[] = [
  {
    id: 1,
    title: "RentalKu Tech",
    category: "Rental Mobil & Transportasi",
    tagline: "Katalog Mobil & Booking Cepat",
    description:
      "Website rental mobil terpadu di Aceh. Calon pelanggan bisa melihat katalog armada lengkap, cek harga sewa, dan langsung reservasi via WhatsApp.",
    image: "/images/showroom-preview-1.png",
    liveUrl: "https://rentalku.tech",
    accentColor: "#3B82F6",
    tags: ["Katalog Armada", "Tombol Booking WA", "Tampilan HP", "Google Search"],
  },
  {
    id: 2,
    title: "Ejaku.id",
    category: "Koreksi Ejaan & Tata Bahasa AI",
    tagline: "Tulisan Rapi dalam Sekejap",
    description:
      "Sistem koreksi ejaan dan tata bahasa Indonesia. Pengunjung bisa langsung menempelkan tulisan dan melihat hasil perbaikannya.",
    image: "/images/showroom-ejaku.png",
    liveUrl: "https://ejaku-id.halimelsaputra.workers.dev",
    accentColor: "#3B82F6",
    tags: ["Koreksi Ejaan", "Hasil Instan", "Tampilan HP", "Coba Langsung"],
  },
  {
    id: 3,
    title: "VAE Handwriting",
    category: "AI Generator Tulisan Tangan",
    tagline: "Tulisan Tangan dari AI",
    description:
      "Generator tulisan tangan berbasis AI. Pengunjung bisa memilih angka dan mengatur gaya tulisan, lalu langsung mengunduh hasilnya.",
    image: "/images/showroom-vae.png",
    liveUrl: "https://vae-handwriting.halimelsaputra.workers.dev",
    accentColor: "#3B82F6",
    tags: ["AI Generator", "Unduh Hasil", "Tampilan HP", "Coba Langsung"],
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 250 : -250,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 250 : -250,
    opacity: 0,
    scale: 0.92,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
}

const swipeConfidenceThreshold = 8000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function ShowroomSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[page, direction], setPage] = useState([0, 0])
  const cardRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 150 }
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + showcases.length) % showcases.length
    setCurrentIndex(newIndex)
    setPage([page + newDirection, newDirection])
  }

  const nextItem = () => paginate(1)
  const prevItem = () => paginate(-1)

  const currentItem = showcases[currentIndex]

  return (
    <section id="showroom" className="relative py-20 bg-white overflow-hidden border-t border-zinc-100 noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
            >
              LIHAT CONTOH{" "}
            </motion.span>
            <motion.span
              className="inline-block text-[#3B82F6]"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const, delay: 0.1 }}
            >
              WEBSITE
            </motion.span>
          </h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as const }}
            className="text-xl sm:text-2xl md:text-3xl font-black text-[#121212] tracking-tight mt-3 uppercase"
          >
            OUR CREATION
          </motion.h3>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            {/* Desktop Left Button (Hidden on Mobile) */}
            <motion.button
              onClick={prevItem}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#121212] items-center justify-center hover:bg-[#121212] hover:text-white transition-colors cursor-pointer z-20"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Slide Stage with Mobile Touch Swipe Drag Gestures */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentItem.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => {
                  isDragging.current = true
                }}
                onDragEnd={(_, { offset, velocity }) => {
                  setTimeout(() => {
                    isDragging.current = false
                  }, 100)
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold || offset.x < -50) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold || offset.x > 50) {
                    paginate(-1)
                  }
                }}
                className="w-full max-w-4xl touch-pan-y cursor-grab active:cursor-grabbing"
                style={{ perspective: 1200 }}
              >
                {/* 
                  VAE Style Immersive Card:
                  Full Background Image + Dark Vignette Filter + Typography Layered on Top 
                */}
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    if (!isDragging.current && currentItem.liveUrl && currentItem.liveUrl.startsWith("http")) {
                      window.open(currentItem.liveUrl, "_blank", "noopener,noreferrer")
                    }
                  }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[540px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] flex flex-col justify-end p-6 sm:p-10 select-none group cursor-pointer"
                >
                  {/* 1. Full-Bleed Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      fill
                      priority
                      className="object-cover object-top"
                    />
                  </div>

                  {/* 2. Gradient Filter (Matching VAE profile-card-filter style) */}
                  <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/35 via-40% to-transparent pointer-events-none" />

                  {/* 3. Bottom Content Layered Directly Over Image */}
                  <div className="relative z-10 space-y-3 pt-20">
                    {/* Headline Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none drop-shadow-md group-hover:text-blue-300 transition-colors">
                      {currentItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base font-sans text-zinc-200/90 leading-relaxed max-w-2xl drop-shadow">
                      {currentItem.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Right Button (Hidden on Mobile) */}
            <motion.button
              onClick={nextItem}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-[#121212] items-center justify-center hover:bg-[#121212] hover:text-white transition-colors cursor-pointer z-20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
              aria-label="Next showcase"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Indicator Pills */}
          <div className="flex justify-center gap-2 mt-8">
            {showcases.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage([index, newDirection])
                }}
                className="h-2 rounded-full transition-all cursor-pointer"
                style={{
                  backgroundColor: index === currentIndex ? "#3B82F6" : "#12121220",
                }}
                animate={{
                  width: index === currentIndex ? 28 : 10,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
