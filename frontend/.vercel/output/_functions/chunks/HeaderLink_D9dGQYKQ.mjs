import { m as maybeRenderHead, c as addAttribute, s as spreadAttributes, e as renderSlot, b as renderTemplate } from './entrypoint_DU0NaWmc.mjs';
import { c as createComponent } from './astro-component_j14fbpTm.mjs';

const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
