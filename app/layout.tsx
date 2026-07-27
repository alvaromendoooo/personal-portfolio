import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Bungee, Geist, Geist_Mono, Permanent_Marker } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

/** Display "stencil" para titulares grandes, estilo rotulacion urbana */
const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
})

/** Trazo manuscrito para la firma/tag, usar con moderacion */
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
})

export const metadata: Metadata = {
  title: "Álex Moreno — Software Engineer",
  description:
    "Portfolio bilingüe de Álex Moreno, ingeniero de software especializado en productos web full-stack.",
  generator: "v0.app",
  keywords: ["software engineer", "ingeniero de software", "full-stack", "portfolio", "developer"],
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f2eee4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungee.variable} ${permanentMarker.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
