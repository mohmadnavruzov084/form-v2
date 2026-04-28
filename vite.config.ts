import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@steps": path.resolve(__dirname, "./src/components/steps"),
    },
  },
  // 👇 ДОБАВЬ ЭТУ СЕКЦИЮ
  css: {
    preprocessorOptions: {
      scss: {
        // Добавляет глобальные переменные (опционально)
        additionalData: `@use "@/scssVariable/variables" as *;`,
        // Включает sourcemaps для отладки
        sourceMap: true,
      },
    },
    // Включает hot reload для CSS
    devSourcemap: true,
  },
  // 👇 ДЛЯ БОЛЕЕ СТАБИЛЬНОГО HMR
  server: {
    watch: {
      // Используй polling если файлы на сетевом диске
      usePolling: false, // если true - потребляет больше CPU
      interval: 1000,
    },
    hmr: {
      overlay: true, // показывать ошибки поверх приложения
    },
  },
});
