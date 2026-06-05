import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'KMS — Soluciones industriales, infraestructura y operación industrial',
  description:
    'KMS ofrece soluciones industriales en México: HVAC, ductería, aislamiento, TPO, corte CNC, desarrollo de maquinaria CNC, recubrimientos, montajes, fabricación metálica y mantenimiento especializado.',
  icons: {
    icon: [
      { url: '/kms/favicon.png', type: 'image/png' },
    ],
    apple: '/kms/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
