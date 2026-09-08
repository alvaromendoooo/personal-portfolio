import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Álvaro Mendo Martín — Portfolio",
    short_name: "Álvaro Mendo",
    description: "Portfolio de un ingeniero de software backend.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0a11",
    theme_color: "#0d0a11",
    icons: [{ src: "/ico-web.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
