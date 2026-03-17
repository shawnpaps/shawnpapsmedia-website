import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  const STATUS_LABELS = {
    "in-development": "In Development",
    "in-design": "In Design",
    launched: "Launched",
    "on-hold": "On Hold",
    archived: "Archived"
  };
  const STATUS_COLORS = {
    "in-development": "text-violet-600 border-violet-200 bg-violet-50",
    "in-design": "text-blue-600 border-blue-200 bg-blue-50",
    launched: "text-green-600 border-green-200 bg-green-50",
    "on-hold": "text-amber-600 border-amber-200 bg-amber-50",
    archived: "text-gray-400 border-gray-200 bg-gray-50"
  };
  let projects = [];
  try {
    const res = await fetch(
      `${CMS_BASE}/api/projects?where[visibility][equals]=public&sort=order&limit=100&depth=0`
    );
    const data = await res.json();
    projects = data?.docs ?? [];
  } catch (e) {
    console.error("[projects.astro] Failed to fetch projects:", e);
  }
  function formatDate(iso) {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "description": "Personal projects, open-source tools, and product experiments I'm building." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen px-6 sm:px-20 py-16 gap-16"> <!-- Page header --> <section class="flex flex-col gap-4 max-w-2xl"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Projects
</span> <h1 class="text-6xl font-semibold text-gray-900 leading-tight">
Things I'm building.
</h1> <p class="text-xl font-light text-gray-500 leading-relaxed">
Personal projects, open-source tools, and product experiments —
				built to scratch an itch or prove something out.
</p> </section> <!-- Projects list --> ${projects.length > 0 ? renderTemplate`<section class="flex flex-col divide-y divide-gray-100"> ${projects.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.slug}`, "href")} class="group flex flex-row items-center justify-between py-10 gap-8 hover:bg-gray-50 -mx-6 px-6 sm:-mx-20 sm:px-20 transition-colors duration-200"> <div class="flex flex-col gap-2 min-w-0"> <div class="flex items-center gap-3"> <h2 class="text-2xl font-semibold text-gray-900 group-hover:text-violet-600 transition-colors duration-200"> ${project.name} </h2> ${project.startedAt && renderTemplate`<span class="text-xs font-light text-gray-400 shrink-0"> ${formatDate(project.startedAt)} ${project.launchedAt && ` → ${formatDate(project.launchedAt)}`} </span>`} </div> <p class="text-base font-light text-gray-500"> ${project.tagline} </p> </div> <div class="flex items-center gap-4 shrink-0"> <span${addAttribute(`text-xs font-medium border px-3 py-1 rounded-full ${STATUS_COLORS[project.status]}`, "class")}> ${STATUS_LABELS[project.status]} </span> <svg class="w-4 h-4 text-gray-300 group-hover:text-violet-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </div> </a>`)} </section>` : renderTemplate`<p class="text-gray-400 font-light text-lg">
Nothing here yet — check back soon.
</p>`} </main> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/projects.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
