import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EMDash – Agentic Development Environment | em-dash.cz',
  description:
    'EMDash je open-source prostředí pro paralelní vývoj s AI agenty. Spusťte 23+ AI kodérů najednou v izolovaných větvích.',
  keywords: [
    'EMDash',
    'AI agenti',
    'vývoj softwaru',
    'paralelní vývoj',
    'Claude Code',
    'Cursor',
    'Agentic Development',
  ],
  metadataBase: new URL('https://em-dash.cz'),
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://em-dash.cz',
    siteName: 'EMDash',
    title: 'EMDash – Agentic Development Environment',
    description:
      'Spusťte 23+ AI kodérů najednou v izolovaných větvích. Open-source, provider-agnostický.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
        <Script
          defer
          data-domain="em-dash.cz"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
