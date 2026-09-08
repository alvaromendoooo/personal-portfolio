import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Álvaro Mendo Martín — Backend Software Engineer",
  description:
    "Portfolio de Álvaro Mendo Martín, ingeniero de software backend centrado en APIs, automatización e infraestructura.",
  metadataBase: new URL("https://personal-portfolio-overcome1.vercel.app"),
  applicationName: "Álvaro Mendo Martín — Portfolio",
  generator: "Next.js",
  authors: [{ name: "Álvaro Mendo Martín", url: "https://github.com/alvaromendoooo" }],
  creator: "Álvaro Mendo Martín",
  publisher: "Álvaro Mendo Martín",
  formatDetection: { telephone: false, date: false, address: false, email: true },
  appleWebApp: { capable: true, title: "Álvaro Mendo", statusBarStyle: "black-translucent" },
  alternates: { canonical: "/" },
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
    icon: "/ico-web.svg",
    shortcut: "/ico-web.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Álvaro Mendo Martín — Portfolio",
    title: "Álvaro Mendo Martín — Backend Software Engineer",
    description: "Portfolio de un ingeniero de software backend centrado en APIs, automatización e infraestructura.",
    images: [{ url: "/perfil.png", width: 512, height: 512, alt: "Álvaro Mendo Martín" }],
  },
  twitter: {
    card: "summary",
    title: "Álvaro Mendo Martín — Backend Software Engineer",
    description: "APIs, automatización e infraestructura construidas con intención.",
    images: ["/perfil.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0d0a11" }, { media: "(prefers-color-scheme: light)", color: "#0d0a11" }],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-background scroll-smooth">
      <body className={`${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
