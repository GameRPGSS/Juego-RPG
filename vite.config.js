import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default ({ mode }) => {
  const port = process.env.PORT || 3000; // Usa el puerto de Render o el 3000 por defecto
  const host = process.env.HOST || '0.0.0.0';
  return defineConfig({
    plugins: [react()],
    server: {
      port
      host
      port,
    },
  });
};
