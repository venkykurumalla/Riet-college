import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

// Preload the two critical web fonts (Latin subsets of Inter and Outfit) so text renders in the
// right face on first paint; the other subsets and JetBrains Mono stay on demand.
const preloadCriticalFonts = (): Plugin => ({
  name: 'preload-critical-fonts',
  enforce: 'post',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      if (!ctx.bundle) return html
      const links = Object.keys(ctx.bundle)
        .filter(f => /(inter|outfit)-latin-wght-normal-.*\.woff2$/.test(f))
        .map(f => `<link rel="preload" as="font" type="font/woff2" crossorigin href="/${f}">`)
        .join('\n    ')
      return html.replace('</head>', `    ${links}\n  </head>`)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), preloadCriticalFonts()],
})
