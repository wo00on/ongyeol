import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),

  ],
  base: '/ongyeol/', // 프로젝트 페이지 배포로 변경
})
