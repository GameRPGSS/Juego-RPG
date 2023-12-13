import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default ({ mode }) => {
  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || 3000;}

  return defineConfig({
    plugins: [react()],
    assetsDir: 'assets',
    server: {
      host,
      port,
    },
  });
};

