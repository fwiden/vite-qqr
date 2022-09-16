/// <reference types="vite/client" />

/// https://vitejs.dev/guide/env-and-mode.html#env-files

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string,
    readonly VITE_HOST: string,
    readonly VITE_KEY: string,
    readonly VITE_SOME_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }