"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface HandWrittenTitleProps {
  title?: string
  className?: string
  strokeColor?: string
  textColor?: string
  onClick?: () => void
}

export function HandWrittenTitle({
  title = "Contact Us",
  className = "",
  strokeColor = "text-[#3B82F6]",
  textColor = "text-white",
  onClick,
}: HandWrittenTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Accelerated trigger window: starts immediately as CTA touches the bottom of screen,
  // and finishes completely when CTA arrives comfortably at the center of viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 98%", "start 52%"],
  })

  // Slightly more responsive spring while preserving smooth flow
  const springConfig = { stiffness: 65, damping: 24, restDelta: 0.001 }
  
  // Smoothly mapped path length finishes earlier in the scroll range
  const rawPathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1], { clamp: true })
  const pathLength = useSpring(rawPathLength, springConfig)

  // Smooth opacity of the path
  const rawPathOpacity = useTransform(scrollYProgress, [0, 0.08, 0.7], [0, 0.9, 0.95], { clamp: true })
  const pathOpacity = useSpring(rawPathOpacity, springConfig)

  // Text reveals promptly in tandem with the line
  const rawTextOpacity = useTransform(scrollYProgress, [0.04, 0.45], [0, 1], { clamp: true })
  const textOpacity = useSpring(rawTextOpacity, springConfig)

  const rawTextY = useTransform(scrollYProgress, [0.04, 0.45], [12, 0], { clamp: true })
  const textY = useSpring(rawTextY, springConfig)

  const rawTextScale = useTransform(scrollYProgress, [0.04, 0.45], [0.94, 1], { clamp: true })
  const textScale = useSpring(rawTextScale, springConfig)

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative w-full max-w-xl mx-auto min-h-[220px] md:min-h-[250px] flex items-center justify-center select-none ${className}`}
    >
      {/* SVG Hand-drawn Circle Path */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          className="w-full h-full max-h-[340px] sm:max-h-[380px] md:max-h-[420px] scale-110 sm:scale-105"
        >
          <title>Hand Drawn Scroll-Linked Loop</title>
          <motion.path
            d="M 950 90 
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength,
              opacity: pathOpacity,
            }}
            className={`${strokeColor}`}
          />
        </svg>
      </div>

      {/* Typography Inside Loop */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale,
            rotate: 4,
          }}
          className={`text-[42px] sm:text-[48px] md:text-[54px] lg:text-[58px] font-black ${textColor} tracking-tight whitespace-nowrap`}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}
