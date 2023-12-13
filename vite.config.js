import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default ({ mode }) => {
  const port = process.env.PORT || 3000; // Usa el puerto de Render o el 3000 por defecto

  return defineConfig({
    plugins: [react()],
    assetsDir: 'assets',
    server: {
      port,
    },
  });
};

