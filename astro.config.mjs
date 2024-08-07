import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
//import { astroImageTools } from "astro-imagetools";
//import lighthouse from 'astro-lighthouse';
//import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://vkurse.ru',
  integrations: [
    tailwind(), 
    preact(), 
    sitemap() 
    //astroImageTools, 
    //compress(),
    //lighthouse()
  ]
});