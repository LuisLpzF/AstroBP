// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
//import staticAdapter from '@astrojs/static';
import 'dotenv/config';


// https://astro.build/config
export default defineConfig({
  //adapter: staticAdapter(),
  output: 'server',

  integrations: [tailwind(), react()],
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto'
  },

  experimental: {
    session: true
  },

  adapter: cloudflare()
});