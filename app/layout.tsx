import type { Metadata } from 'next'
import './globals.css'
import { LenisProvider } from '@/components/lenis-provider'

export const metadata: Metadata = {
  title: 'Jayantara Studio — Jasa Pembuatan Website Profesional UMKM',
  description: 'Membangun reputasi dan pertumbuhan bisnis Anda lewat website berkelas, cepat, elegan, dan langsung terhubung ke WhatsApp pembeli.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
