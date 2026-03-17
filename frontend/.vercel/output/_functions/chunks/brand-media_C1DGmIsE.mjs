import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';

const $$BrandMedia = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  let photos = [];
  try {
    const res = await fetch(
      `${CMS_BASE}/api/category-galleries/2?depth=2&draft=false&locale=undefined&trash=false`
    );
    const data = await res.json();
    photos = data?.photos ?? [];
  } catch (e) {
    console.error("Failed to fetch brand media gallery:", e);
  }
  const featuredPhoto = photos.find((p) => p.featured) ?? photos[0];
  const gridPhotos = photos.filter((p) => p !== featuredPhoto);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white text-gray-900 min-h-screen"> <!-- Hero --> <section class="relative flex flex-col justify-end min-h-[90vh] px-20 py-24 overflow-hidden bg-gray-900"> <div class="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_30%,_#111111_100%)] z-10"></div> <div class="absolute inset-0"> ${featuredPhoto && renderTemplate`<img${addAttribute(`${CMS_BASE}${featuredPhoto.image.url}`, "src")}${addAttribute(featuredPhoto.image.alt ?? "", "alt")} class="w-full h-full object-cover opacity-40">`} </div> <!-- Large background type --> <span class="absolute top-16 right-16 text-[200px] font-black text-white/5 leading-none select-none z-10">
BRAND
</span> <div class="relative z-20 max-w-3xl"> <span class="text-xs font-medium text-amber-400 uppercase tracking-widest mb-4 block">
Visual Media
</span> <h1 class="text-7xl font-black leading-none text-white mb-6 uppercase">
Photography built<br>for the web.
</h1> <p class="text-xl font-light text-gray-400 max-w-xl leading-relaxed">
Original photography and visual content created to power
					websites, digital campaigns, and online experiences — not
					just to look good in a portfolio.
</p> </div> </section> <!-- Intro --> <section class="px-20 py-24 flex flex-row items-start justify-between gap-20 border-b border-gray-100"> <div class="max-w-sm shrink-0"> <h2 class="text-4xl font-black text-gray-900 leading-tight uppercase">
The web runs<br>on visuals.
</h2> </div> <div class="flex flex-col gap-6 max-w-xl"> <p class="text-lg font-light text-gray-500 leading-relaxed">
Every website I build needs imagery that actually does
					something — hero shots that set tone, product photos that
					convert, portraits that make people feel like they're
					dealing with a real human. Stock photos don't do that.
					Original photography does.
</p> <p class="text-lg font-light text-gray-500 leading-relaxed">
Because I shoot and build, the photography is designed with
					the final digital experience in mind from the start — the
					right dimensions, the right mood, the right moments for the
					layouts they'll actually live in.
</p> </div> </section> <!-- Photo grid --> <section class="px-20 py-24 bg-gray-950"> ${gridPhotos.length > 0 ? renderTemplate`<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"> ${gridPhotos.map((photo) => renderTemplate`<div class="break-inside-avoid overflow-hidden bg-[#1a1a1a]"> <img${addAttribute(`${CMS_BASE}${photo.image.url}`, "src")}${addAttribute(photo.image.alt ?? "", "alt")} class="w-full h-auto object-cover"> ${photo.caption && renderTemplate`<p class="px-4 py-2 text-xs text-gray-500 font-light"> ${photo.caption} </p>`} </div>`)} </div>` : renderTemplate`<p class="text-gray-600 text-sm font-light">
No photos yet.
</p>`} </section> <!-- Services --> <section class="px-20 py-24 border-t border-gray-100"> <div class="flex flex-col gap-12"> <div class="flex flex-row items-end justify-between"> <div class="flex flex-col gap-2"> <span class="text-xs font-medium text-amber-500 uppercase tracking-widest">
What I shoot
</span> <h2 class="text-4xl font-black text-gray-900 uppercase">
Visual Media
</h2> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-100"> ${[
    {
      title: "Hero & Brand Photography",
      desc: "The images that anchor a website — shot with layout, color, and composition in mind from the start."
    },
    {
      title: "Founder & Team Portraits",
      desc: "Headshots and editorial portraits that make the About page feel like an actual introduction."
    },
    {
      title: "Product & Detail Shots",
      desc: "Clean, web-optimized imagery for e-commerce, landing pages, and product marketing."
    },
    {
      title: "Event & Launch Coverage",
      desc: "Photography for product launches, openings, and live events — delivered fast and ready to publish."
    },
    {
      title: "Content Batching",
      desc: "High-volume shoot days that produce weeks of social and web content in a single session."
    },
    {
      title: "Art Direction",
      desc: "Creative direction and pre-production planning to make sure every frame fits the digital context it's built for."
    }
  ].map((s) => renderTemplate`<div class="flex flex-col gap-3 p-8 border-b border-r border-gray-100"> <h3 class="text-base font-bold text-gray-900 uppercase tracking-tight"> ${s.title} </h3> <p class="text-sm font-light text-gray-500 leading-relaxed"> ${s.desc} </p> </div>`)} </div> </div> </section> <!-- CTA --> <section class="px-20 py-32 bg-gray-950 flex flex-col items-center text-center gap-6"> <span class="text-xs font-medium text-amber-400 uppercase tracking-widest">
Work with me
</span> <h2 class="text-5xl font-black text-white uppercase max-w-xl leading-tight">
Great websites start with great imagery.
</h2> <p class="text-lg font-light text-gray-500 max-w-md leading-relaxed">
Tell me about your project — the site you're building, the brand
				you're launching, or the story you need to tell. I'll handle the
				photography and make sure it works online.
</p> <a href="/contact" class="mt-4 px-8 py-4 rounded-none bg-amber-400 text-gray-900 text-sm font-bold uppercase tracking-widest hover:bg-amber-300 transition-colors duration-200">
Get in touch
</a> </section> </div> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/photography/brand-media.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/photography/brand-media.astro";
const $$url = "/photography/brand-media";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BrandMedia,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
