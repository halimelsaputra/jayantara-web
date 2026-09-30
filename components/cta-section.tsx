"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HandWrittenTitle } from "@/components/hand-written-title"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-24 bg-[#121212] overflow-hidden border-t border-white/[0.08] noise-overlay flex items-center justify-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#121212] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        {/* ========================================================================= */}
        {/* 2-COLUMN LAYOUT: LEFT = HEADLINE & SUBTITLE | RIGHT = CONTACT US LOOP */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          
          {/* 1. SEBELAH KIRI: HEADLINE + SUBTITLE + LOGOS */}
          <div className="md:col-span-6 text-left space-y-3.5 md:pr-6">
            
            {/* Clean Solid White Masked Kinetic Headline */}
            <div className="overflow-hidden pb-1">
              <motion.h3
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
                transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as const }}
                className="text-2xl sm:text-3xl md:text-[34px] font-black text-white tracking-tight leading-tight"
              >
                Yuk mulai obrolin ide website yang mau dibikin.
              </motion.h3>
            </div>

            {/* Subtitle with Smooth Slide Up */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const, delay: 0.15 }}
                className="text-sm sm:text-base font-mono text-white/50 tracking-tight leading-relaxed max-w-md"
              >
                Masih bingung mau buat website gimana? Tenang aja, langsung chat kita sekarang. Kita siap nemenin kamu ngobrol.
              </motion.p>
            </div>

            {/* Authentic Brand Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const, delay: 0.28 }}
              className="flex items-center gap-3.5 pt-2"
            >
              {/* Official Instagram Button */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jayantara Instagram"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring" as const, stiffness: 450, damping: 15 }}
                className="relative group w-11 h-11 rounded-2xl p-[1px] overflow-hidden shadow-[0_4px_16px_rgba(225,48,108,0.3)] cursor-pointer flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
              >
                <div className="w-full h-full rounded-[15px] flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </motion.a>

              {/* Official WhatsApp Button */}
              <motion.a
                href="https://wa.me/6285122761725?text=Halo%20Jayantara,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jayantara WhatsApp"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring" as const, stiffness: 450, damping: 15 }}
                className="relative group w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:bg-[#22c35e] cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* 2. SEBELAH KANAN: HAND-WRITTEN "CONTACT US" LOOP */}
          <div className="md:col-span-6 flex items-center justify-center md:justify-end">
            <a
              href="https://wa.me/6285122761725?text=Halo%20Jayantara,%20saya%20ingin%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer transition-transform hover:scale-105"
            >
              <HandWrittenTitle
                title="Contact Us"
                strokeColor="text-[#3B82F6]"
                textColor="text-white"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
