"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
}

interface FooterLinkItem {
  name: string
  href: string
  isExternal?: boolean
}

interface FooterSectionGroup {
  title: string
  links: FooterLinkItem[]
}

export function Footer() {
  const [isHovering, setIsHovering] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const footerLinks: FooterSectionGroup[] = [
    {
      title: "Layanan",
      links: [
        { name: "Website Bisnis & UMKM", href: "#contact" },
        { name: "Website Komersial", href: "#contact" },
        { name: "Landing Page Promosi", href: "#contact" },
        { name: "Website Jasa Profesional", href: "#contact" },
      ],
    },
    {
      title: "Navigasi",
      links: [
        { name: "Beranda", href: "#hero" },
        { name: "Our Creation", href: "#showroom" },
        { name: "Mengapa Jayantara", href: "#why-us" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Standar",
      links: [
        { name: "Tampilan Rapi", href: "#why-us" },
        { name: "Selesai Sesuai Janji", href: "#why-us" },
        { name: "Milik Anda 100%", href: "#why-us" },
        { name: "Garansi Desain", href: "#why-us" },
      ],
    },
    {
      title: "Hubungi Kami",
      links: [
        {
          name: "WhatsApp",
          href: "https://wa.me/6285122761725?text=Halo%20Jayantara,%20saya%20ingin%20konsultasi%20pembuatan%20website",
          isExternal: true,
        },
        {
          name: "Instagram",
          href: "https://instagram.com",
          isExternal: true,
        },
        { name: "Mulai Diskusi", href: "#contact" },
        { name: "Banda Aceh, ID", href: "#contact" },
      ],
    },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer ref={footerRef} id="footer" className="relative bg-white pt-16 pb-6 overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Kinetic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#121212] tracking-tighter leading-[0.9] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
            >
              LETS CONNECT
            </motion.span>
            <motion.span
              className="block text-[#3B82F6]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const, delay: 0.1 }}
            >
              LEVEL UP?
            </motion.span>
          </h2>
        </motion.div>

        {/* Social Icons: Instagram & WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
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
            className="relative group w-12 h-12 rounded-2xl p-[1px] overflow-hidden shadow-[0_4px_20px_rgba(225,48,108,0.25)] cursor-pointer flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
          >
            <div className="w-full h-full rounded-[15px] flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
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
            className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:bg-[#20bd5a] transition-all cursor-pointer"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Studio Description */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#121212]/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Jayantara Tech adalah studio pembuatan website profesional. Desain rapi,
            milik Anda 100%, dan selesai tepat waktu sesuai janji.
          </p>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-zinc-300"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-[#121212] text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}>
                      {item.isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#121212]/60 hover:text-[#3B82F6] font-mono text-xs transition-colors inline-block cursor-pointer"
                        >
                          {item.name} ↗
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className="text-[#121212]/60 hover:text-[#3B82F6] font-mono text-xs transition-colors inline-block cursor-pointer"
                        >
                          {item.name}
                        </a>
                      )}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-zinc-300 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
          >
            <span className="text-xl font-black">
              <span className="text-[#121212]">JAYAN</span>
              <span className="text-[#3B82F6]">TARA</span>
            </span>
          </motion.div>

          <p className="text-[#121212]/40 font-mono text-xs">© 2026 Jayantara Tech.</p>

          <motion.p
            className="text-[#121212]/30 font-mono text-xs cursor-pointer"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={
              isHovering
                ? {
                    rotate: [0, -5, 5, -5, 5, 0],
                    scale: [1, 1.1, 1],
                    color: "#3B82F6",
                  }
                : {
                    rotate: 0,
                    scale: 1,
                    color: "rgba(18,18,18,0.3)",
                  }
            }
            transition={{ duration: 0.5 }}
          >
            made with trust
          </motion.p>
        </motion.div>
      </div>

      {/* Background Watermark Text Horizontal */}
      <motion.div
        className="absolute bottom-8 sm:bottom-11 md:bottom-14 left-1/2 -translate-x-1/2 text-[8.2rem] sm:text-[13.2rem] md:text-[17.8rem] font-black text-black/[0.025] pointer-events-none select-none leading-none tracking-tighter scale-y-[1.75] origin-bottom"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        JAYANTARA
      </motion.div>
    </footer>
  )
}
