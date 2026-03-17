import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      label: "Web Design",
      items: [
        "UI & interaction design",
        "Design systems",
        "Prototyping & wireframing",
        "Brand-driven layouts"
      ]
    },
    {
      label: "Development",
      items: [
        "Front-end engineering",
        "Full-stack web apps",
        "CMS & headless builds",
        "API & platform integrations"
      ]
    },
    {
      label: "Creative Technology",
      items: [
        "Interactive experiences",
        "Motion & animation",
        "AI-powered tooling",
        "Custom tooling & scripts"
      ]
    }
  ];
  const clients = [
    {
      type: "Creative Studios",
      desc: "Agencies, production companies, and design studios that need a technical partner who speaks their language."
    },
    {
      type: "Founders & Startups",
      desc: "Early-stage teams who need a site that punches above their weight — built fast, built right."
    },
    {
      type: "Artists & Musicians",
      desc: "Independent artists and labels who want a web presence as distinctive as their sound."
    },
    {
      type: "Small Businesses",
      desc: "Owner-operated businesses that want a real developer, not a template — and a long-term partner."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen px-20 py-16 gap-28"> <!-- Hero --> <section class="flex flex-row items-center justify-between gap-16 w-full"> <div class="flex flex-col gap-6 max-w-2xl"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Shawn Papineau — Tampa, FL
</span> <h1 class="text-6xl font-semibold text-gray-900 leading-tight">
Creative developer.<br>Thoughtful builder.
</h1> <p class="text-xl font-light text-gray-500 leading-relaxed">
I design and build websites and web applications for brands,
					artists, and founders who care about how things look and how
					they work.
</p> <p class="text-xl font-light text-gray-500 leading-relaxed">
I've been writing software for 7+ years and designing for
					just as long — which means you get someone who can own the
					whole thing, from the first wireframe to production
					deployment. No handoffs. No friction.
</p> <div class="flex flex-row items-center gap-4 mt-2"> <a href="/contact" class="px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors duration-200">
Start a project
</a> <a href="/work" class="px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-violet-300 hover:text-violet-600 transition-colors duration-200">
See the work
</a> </div> </div> <div class="shrink-0 w-80 h-80 rounded-2xl overflow-hidden shadow-lg"> <img${addAttribute(`${"https://shawnpapsmedia-website.vercel.app"}/api/media/file/shawn_computer`, "src")} alt="Shawn Paps Media" class="w-full h-full object-cover"> </div> </section> <!-- The Edge --> <section class="flex flex-row items-start gap-20 border-t border-gray-100 pt-28"> <div class="max-w-sm shrink-0 flex flex-col gap-3"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
The difference
</span> <h2 class="text-4xl font-semibold text-gray-900 leading-tight">
Design sense and engineering depth — in the same person.
</h2> </div> <div class="flex flex-col gap-6 max-w-xl pt-1"> <p class="text-lg font-light text-gray-500 leading-relaxed">
Most projects suffer from the gap between designers who
					can't implement and developers who can't design. I close
					that gap — writing clean code and making deliberate visual
					decisions from the same seat.
</p> <p class="text-lg font-light text-gray-500 leading-relaxed">
The result is faster iteration, fewer misunderstandings, and
					a final product that actually reflects the original vision
					instead of a diluted version of it.
</p> <!-- Signature offer callout --> <div class="mt-4 p-6 rounded-2xl border border-violet-100 bg-violet-50"> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-2">
How I work
</p> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Design → Build → Ship
</h3> <p class="text-sm font-light text-gray-600 leading-relaxed">
I take projects from concept to deployed product. That
						means wireframes, visual design, front-end build, CMS
						setup, and launch — all handled without you needing to
						manage a team.
</p> </div> </div> </section> <!-- Services --> <section class="flex flex-col gap-10"> <div class="flex flex-col gap-2"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Services
</span> <h2 class="text-4xl font-semibold text-gray-900">What I do.</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${services.map((group) => renderTemplate`<div class="flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm shadow-sm"> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest"> ${group.label} </p> <ul class="flex flex-col gap-2"> ${group.items.map((item) => renderTemplate`<li class="flex items-center gap-2 text-gray-700 text-base font-light"> <span class="w-1 h-1 rounded-full bg-violet-400 shrink-0"></span> ${item} </li>`)} </ul> </div>`)} </div> </section> <!-- Who we serve --> <section class="flex flex-col gap-10"> <div class="flex flex-col gap-2"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Who we work with
</span> <h2 class="text-4xl font-semibold text-gray-900">
Who I work with.
</h2> </div> <div class="flex flex-col"> ${clients.map((client, i) => renderTemplate`<div${addAttribute(`flex flex-row gap-12 py-10 ${i !== clients.length - 1 ? "border-b border-gray-100" : ""}`, "class")}> <h3 class="text-lg font-semibold text-gray-900 w-48 shrink-0 pt-0.5"> ${client.type} </h3> <p class="text-base font-light text-gray-500 leading-relaxed max-w-xl"> ${client.desc} </p> </div>`)} </div> <p class="text-base font-light text-gray-400 italic max-w-xl">
Ideal client: someone with a strong point of view who wants a
				site that actually reflects it.
</p> </section> <!-- Location --> <section class="flex flex-row items-center gap-6 p-8 rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm shadow-sm w-fit"> <div class="flex items-center gap-2"> <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div> <p class="text-sm font-medium text-gray-700">
Based in Tampa, FL
</p> </div> <div class="w-px h-4 bg-gray-200"></div> <p class="text-sm font-light text-gray-500">
Available for local and remote projects
</p> <div class="w-px h-4 bg-gray-200"></div> <p class="text-sm font-light text-gray-500">
Open to contract, freelance, and retainer work
</p> </section> <!-- CTA --> <section class="flex flex-col items-center text-center gap-6 py-20"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Let's build something
</span> <h2 class="text-5xl font-semibold text-gray-900 max-w-xl leading-tight">
Have something to build?
</h2> <p class="text-xl font-light text-gray-500 max-w-lg leading-relaxed">
Tell me about your project — what you're building, where you're
				stuck, or what you want to exist that doesn't yet. I'll get back
				to you within a day or two.
</p> <div class="flex flex-row items-center gap-4 mt-2"> <a href="/contact" class="px-8 py-4 rounded-full bg-violet-600 text-white text-base font-medium hover:bg-violet-700 transition-colors duration-200">
Start a project
</a> <a href="https://github.com/shawnpapineau" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-full border border-gray-200 text-gray-700 text-base font-medium hover:border-violet-300 hover:text-violet-600 transition-colors duration-200">
GitHub
</a> </div> </section> </main> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/about.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
