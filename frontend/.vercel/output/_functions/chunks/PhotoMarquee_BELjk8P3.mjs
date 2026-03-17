import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate } from './entrypoint_DU0NaWmc.mjs';

const $$PhotoMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PhotoMarquee;
  const { photos, cmsBase } = Astro2.props;
  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }
  const shuffled = shuffle(photos);
  const mid = Math.ceil(shuffled.length / 2);
  const row1 = shuffled.slice(0, mid);
  const row2 = shuffled.slice(mid);
  return renderTemplate`${maybeRenderHead()}<div class="w-full overflow-hidden py-8 space-y-4" data-astro-cid-qrscfrd7> <!-- Row 1: scroll left --> <div class="marquee-row" data-astro-cid-qrscfrd7> <div class="marquee-track marquee-left" data-astro-cid-qrscfrd7> ${[...row1, ...row1].map((photo) => renderTemplate`<div class="marquee-item" data-astro-cid-qrscfrd7> <img${addAttribute(
    photo.url.startsWith("http") ? photo.url : `${cmsBase}${photo.url}`,
    "src"
  )}${addAttribute(photo.alt, "alt")} class="h-full w-auto object-cover rounded-xl" loading="lazy" data-astro-cid-qrscfrd7> </div>`)} </div> </div> <!-- Row 2: scroll right --> <div class="marquee-row" data-astro-cid-qrscfrd7> <div class="marquee-track marquee-right" data-astro-cid-qrscfrd7> ${[...row2, ...row2].map((photo) => renderTemplate`<div class="marquee-item" data-astro-cid-qrscfrd7> <img${addAttribute(
    photo.url.startsWith("http") ? photo.url : `${cmsBase}${photo.url}`,
    "src"
  )}${addAttribute(photo.alt, "alt")} class="h-full w-auto object-cover rounded-xl" loading="lazy" data-astro-cid-qrscfrd7> </div>`)} </div> </div> </div>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/PhotoMarquee.astro", void 0);

export { $$PhotoMarquee as $ };
