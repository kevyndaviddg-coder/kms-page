import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE_URL = 'https://www.grupokms.com'
const TITLE =
  'KMS — Soluciones industriales: HVAC, TPO, policarbonatos, CNC, PLCs y automatización'
const DESCRIPTION =
  'KMS integra HVAC, ductería, aislamiento, TPO, policarbonatos, recubrimientos, CNC, maquinaria CNC, PLCs, automatización industrial, fabricación, estructuras y montajes para proyectos industriales y comerciales en México.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'HVAC industrial',
    'ductería industrial',
    'aislamiento térmico',
    'TPO',
    'policarbonatos',
    'recubrimientos industriales',
    'corte CNC',
    'maquinaria CNC',
    'PLCs',
    'automatización industrial',
    'fabricación metálica',
    'estructuras metálicas',
    'montajes industriales',
    'mantenimiento industrial',
    'Monterrey',
    'Nuevo León',
    'México',
  ],
  authors: [{ name: 'KMS — Soluciones industriales' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'KMS — Soluciones industriales',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/kms/hero/01.jpg',
        width: 1200,
        height: 630,
        alt: 'KMS — Soluciones industriales en México',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/kms/hero/01.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/kms/favicon.png', type: 'image/png' }],
    apple: '/kms/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KMS',
  alternateName: 'KMS — Soluciones industriales',
  url: SITE_URL,
  logo: `${SITE_URL}/kms/logo.png`,
  email: 'contacto@grupokms.com',
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX',
  },
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios industriales',
    itemListElement: [
      'HVAC y refrigeración',
      'Ductería y laminación',
      'Aislamiento y TPO',
      'Policarbonatos y cubiertas traslúcidas',
      'CNC industrial',
      'Maquinaria CNC',
      'PLCs y automatización industrial',
      'Recubrimientos industriales',
      'Montajes y fabricación',
      'Estructuras metálicas',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: 'KMS — Soluciones industriales',
  inLanguage: 'es-MX',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
