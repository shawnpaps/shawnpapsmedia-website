import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';

const $$Concert = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  let photos = [];
  try {
    const res = await fetch(
      `${CMS_BASE}/api/category-galleries/1?depth=2&draft=false&locale=undefined&trash=false`
    );
    const data = await res.json();
    photos = data?.photos ?? [];
  } catch (e) {
    console.error("Failed to fetch concert gallery:", e);
  }
  const featuredPhoto = photos.find((p) => p.featured) ?? photos[0];
  const gridPhotos = photos.filter((p) => p !== featuredPhoto);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#0a0a0a] text-white min-h-screen"> <!-- Hero --> <section class="relative flex flex-col justify-end min-h-[90vh] px-20 py-24 overflow-hidden"> <div class="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_30%,_#0a0a0a_100%)] z-10"></div> <div class="absolute inset-0 bg-[#1a1a1a]"> ${featuredPhoto && renderTemplate`<img${addAttribute(`${CMS_BASE}${featuredPhoto.image.url}`, "src")}${addAttribute(featuredPhoto.image.alt ?? "", "alt")} class="w-full h-full object-cover object-top opacity-50">`} </div> <div class="relative z-20 max-w-3xl"> <span class="text-xs font-medium text-violet-400 uppercase tracking-widest mb-4 block">
Photography — Concert & Music
</span> <h1 class="text-7xl font-semibold leading-none text-white mb-6">
The moment<br>before the roar.
</h1> <p class="text-xl font-light text-gray-400 max-w-xl leading-relaxed">
Live music photography that captures the energy, the sweat,
					and the split-second that makes a show unforgettable.
</p> </div> </section> <!-- Intro --> <section class="px-20 py-24 flex flex-row items-start justify-between gap-20 border-b border-white/10"> <div class="max-w-sm shrink-0"> <h2 class="text-4xl font-semibold text-white leading-tight">
Fast. Raw.<br>Real.
</h2> </div> <div class="flex flex-col gap-6 max-w-xl"> <p class="text-lg font-light text-gray-400 leading-relaxed">
Concert photography lives and dies in the first three songs.
					I work fast, move with the music, and find the frames that
					tell the story of a night — from the pit to the back of the
					room.
</p> <p class="text-lg font-light text-gray-400 leading-relaxed">
Whether it's a stadium tour or an underground venue with no
					stage lighting, I know how to find the shot in the dark.
</p> </div> </section> <!-- Photo grid --> <section class="px-20 py-24"> ${gridPhotos.length > 0 ? renderTemplate`<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"> ${gridPhotos.map((photo) => renderTemplate`<div class="break-inside-avoid rounded-xl overflow-hidden bg-[#1a1a1a]"> <img${addAttribute(`${CMS_BASE}${photo.image.url}`, "src")}${addAttribute(photo.image.alt ?? "", "alt")} class="w-full h-auto object-cover"> ${photo.caption && renderTemplate`<p class="px-4 py-2 text-xs text-gray-500 font-light"> ${photo.caption} </p>`} </div>`)} </div>` : renderTemplate`<p class="text-gray-600 text-sm font-light">
No photos yet.
</p>`} </section> <!-- Services --> <section class="px-20 py-24 bg-[#0f0f0f] border-t border-white/10"> <div class="flex flex-col gap-12"> <div class="flex flex-col gap-2"> <span class="text-xs font-medium text-violet-400 uppercase tracking-widest">What I cover</span> <h2 class="text-4xl font-semibold text-white">Services</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${[
    {
      title: "Live Concerts",
      desc: "Pit access, full-show coverage, and editorial selects for press or promotion."
    },
    {
      title: "Festival Coverage",
      desc: "Multi-stage, multi-day coverage for festivals of any size."
    },
    {
      title: "Press & Promo",
      desc: "Artist portraits and promotional imagery shot before or after the show."
    },
    {
      title: "Album & Merch",
      desc: "Creative direction and photography for album artwork, merch drops, and campaigns."
    },
    {
      title: "Tour Documentation",
      desc: "Behind-the-scenes and on-stage documentation across a full tour run."
    },
    {
      title: "Licensing",
      desc: "Images licensed for editorial, streaming platforms, and commercial use."
    }
  ].map((s) => renderTemplate`<div class="flex flex-col gap-3 p-8 bg-white/5 rounded-2xl border border-white/10"> <h3 class="text-base font-semibold text-white"> ${s.title} </h3> <p class="text-sm font-light text-gray-500 leading-relaxed"> ${s.desc} </p> </div>`)} </div> </div> </section> <!-- CTA --> <section class="px-20 py-32 flex flex-col items-center text-center gap-6 border-t border-white/10"> <span class="text-xs font-medium text-violet-400 uppercase tracking-widest">Book a shoot</span> <h2 class="text-5xl font-semibold text-white max-w-xl leading-tight">
Got a show coming up?
</h2> <p class="text-lg font-light text-gray-500 max-w-md leading-relaxed">
Let's talk dates, access, and what you need — whether it's press
				shots, content, or full coverage.
</p> <a href="/contact" class="mt-4 px-8 py-4 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors duration-200">
Get in touch
</a> </section> </div> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/photography/concert.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/photography/concert.astro";
const $$url = "/photography/concert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Concert,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
