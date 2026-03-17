import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const CATEGORY_LABELS = {
  "web-app": "Web Apps",
  "design-system": "Design Systems",
  "e-commerce": "E-Commerce",
  branding: "Branding",
  "marketing-site": "Marketing Sites"
};
function WorkCard({ item, index }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: item.href,
      className: "work-card group relative block rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2",
      style: { animationDelay: `${index * 120}ms` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-full h-64 overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: item.coverImage,
            alt: item.title,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white px-5 py-4 border-t border-gray-100", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-violet-600 uppercase tracking-widest", children: item.client }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mt-1 truncate", children: item.title }),
          item.category && /* @__PURE__ */ jsx("span", { className: "inline-block mt-2 px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-600 text-xs font-medium", children: CATEGORY_LABELS[item.category] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-0 -bottom-2 translate-y-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2 z-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-6 size-4 rotate-45 border-l border-t border-gray-200 bg-white" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1", children: item.client }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-gray-900 mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed line-clamp-3", children: item.summary }),
          /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs font-medium text-violet-600", children: [
            "View case study",
            /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "size-3",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                    clipRule: "evenodd"
                  }
                )
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
function WorkGrid({ items }) {
  const [activeCategory, setActiveCategory] = useState(
    null
  );
  const presentCategories = Array.from(
    new Set(
      items.map((i) => i.category).filter((c) => Boolean(c))
    )
  ).sort(
    (a, b) => CATEGORY_LABELS[a].localeCompare(CATEGORY_LABELS[b])
  );
  const filtered = activeCategory === null ? items : items.filter((i) => i.category === activeCategory);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
    presentCategories.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-row flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveCategory(null),
          className: `px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === null ? "bg-violet-600 text-white" : "text-gray-500 border border-gray-200 hover:border-violet-300 hover:text-violet-600"}`,
          children: "All"
        }
      ),
      presentCategories.map((cat) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveCategory(
            activeCategory === cat ? null : cat
          ),
          className: `px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === cat ? "bg-violet-600 text-white" : "text-gray-500 border border-gray-200 hover:border-violet-300 hover:text-violet-600"}`,
          children: CATEGORY_LABELS[cat]
        },
        cat
      ))
    ] }),
    /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-24", children: filtered.length > 0 ? filtered.map((item, i) => /* @__PURE__ */ jsx(WorkCard, { item, index: i }, item.href)) : /* @__PURE__ */ jsx("p", { className: "col-span-full text-gray-400 font-light text-lg py-16 text-center", children: "No projects in this category yet." }) })
  ] });
}

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  const workItems = await fetch(
    `${CMS_BASE}/api/case-studies?limit=100&depth=1&where[status][equals]=published`
  ).then((res) => res.json()).then(
    (data) => (data?.docs ?? []).map((d) => ({
      title: d.title ?? "Untitled",
      client: d.client ?? "",
      summary: d.summary ?? "",
      coverImage: d.coverImage?.url ? `${CMS_BASE}${d.coverImage.url}` : "https://placehold.co/480x256",
      href: `/case-studies/${d.slug ?? d.id}`,
      category: d.category ?? null
    }))
  ).catch((e) => {
    console.error("Failed to fetch case studies:", e);
    return [];
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen px-6 sm:px-20 py-16 gap-16"> <!-- Page header --> <section class="flex flex-col gap-4 max-w-2xl"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">Selected Work</span> <h1 class="text-6xl font-semibold text-gray-900">
Things I've shipped.
</h1> <p class="text-xl font-light text-gray-500 leading-relaxed">
A selection of websites, web apps, and design systems — built
				for founders, creative brands, and anyone who cares how their
				product feels to use.
</p> </section> <!-- Filter row + cards — client-side React for instant filtering --> ${renderComponent($$result2, "WorkGrid", WorkGrid, { "items": workItems, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/react/WorkGrid", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/work.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
