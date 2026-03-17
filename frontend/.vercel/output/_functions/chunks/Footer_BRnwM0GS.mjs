import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { c as addAttribute, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DU0NaWmc.mjs';
import { a as SITE_TITLE } from './consts_DQVR-UUj.mjs';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full px-20 py-12 mt-20 border-t border-gray-100 flex flex-row items-center justify-between text-sm text-gray-400"> <p>&copy; ${today.getFullYear()} Shawn Papineau. All rights reserved.</p> <div class="flex items-center gap-6"> <a href="https://github.com/shawnpapineau" target="_blank" rel="noopener noreferrer" class="hover:text-violet-600 transition-colors duration-200">
GitHub
</a> <a href="https://linkedin.com/in/shawnpapineau" target="_blank" rel="noopener noreferrer" class="hover:text-violet-600 transition-colors duration-200">
LinkedIn
</a> <a href="mailto:shawn@shawnpapsmedia.com" class="hover:text-violet-600 transition-colors duration-200">
Email
</a> </div> </footer>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/Footer.astro", void 0);

export { $$BaseHead as $, $$Footer as a };
