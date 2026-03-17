// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	output: "static",
	adapter: vercel(),
	integrations: [mdx(), sitemap(), react()],

	vite: {
		plugins: [tailwindcss()],
	},
});
