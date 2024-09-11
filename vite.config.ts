import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "nata-m2",
    project: "ploomes"
  }), sentryVitePlugin({
    org: "785564b31725",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})