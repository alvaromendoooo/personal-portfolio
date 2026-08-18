import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

/** Display geométrico y técnico para titulares, usado con moderación */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Álvaro Mendo Martín — Ingeniero de Software Backend & Infraestructura",
  description:
    "Portfolio de Álvaro Mendo Martín, ingeniero de software freelance especializado en backend, automatización de procesos e infraestructura para software empresarial.",
  generator: "v0.app",
  keywords: [
    "software engineer",
    "ingeniero de software",
    "backend developer",
    "freelance developer",
    "infraestructura cloud",
    "automatización",
    "portfolio",
  ],
  icons: {
    icon: "/icon-web.png",
    apple: "/icon-web.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f5f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
