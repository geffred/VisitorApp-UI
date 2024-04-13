import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/employees":"http://localhost:8080",
      "/employees/{id}":"http://localhost:8080",
      "/visitors":"http://localhost:8080",
      "/visitors/{id}":"http://localhost:8080",
      "/visitors/present":"http://localhost:8080",
      "/visitors/attendus/{date}":"http://localhost:8080",
      "/visits":"http://localhost:8080",
      "/visits/{date}":"http://localhost:8080",
      "/visits/attendus":"http://localhost:8080",
      "/visits/visitors/{id}":"http://localhost:8080",
      "/visits/present":"http://localhost:8080",
      "/visits/arrival/{id}":"http://localhost:8080",
      "/visits/departure/{id}":"http://localhost:8080",
      "/visits/licensePlateNumber/{id}" :"http://localhost:8080",
      "/visits/{id}" :"http://localhost:8080",
    }
  }
  
});
