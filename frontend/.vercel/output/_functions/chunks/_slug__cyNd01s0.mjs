import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, F as Fragment, u as unescapeHTML } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  const { slug } = Astro2.params;
  let project = null;
  try {
    const res = await fetch(
      `${CMS_BASE}/api/projects?where[slug][equals]=${slug}&depth=2&limit=1`
    );
    const data = await res.json();
    project = data?.docs?.[0] ?? null;
  } catch (e) {
    console.error("[projects/slug] Failed to fetch project:", e);
  }
  if (!project) {
    return Astro2.redirect("/projects");
  }
  function mediaUrl(img) {
    if (!img || typeof img === "number") return "";
    return img.url ? `${CMS_BASE}${img.url}` : "";
  }
  function mediaAlt(img, fallback = "") {
    if (!img || typeof img === "number") return fallback;
    return img.alt ?? fallback;
  }
  function formatDate(iso) {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric"
    });
  }
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  const FORMAT_BOLD = 1;
  const FORMAT_ITALIC = 2;
  const FORMAT_UNDERLINE = 8;
  const FORMAT_CODE = 16;
  const FORMAT_STRIKETHROUGH = 4;
  function renderInline(node) {
    if (node.type === "text") {
      let t = escapeHtml(node.text ?? "");
      const fmt = typeof node.format === "number" ? node.format : 0;
      if (fmt & FORMAT_CODE)
        t = `<code class="text-violet-700 bg-violet-50 px-1.5 py-0.5 rounded text-sm font-mono">${t}</code>`;
      if (fmt & FORMAT_BOLD)
        t = `<strong class="font-semibold text-gray-900">${t}</strong>`;
      if (fmt & FORMAT_ITALIC) t = `<em>${t}</em>`;
      if (fmt & FORMAT_UNDERLINE) t = `<u>${t}</u>`;
      if (fmt & FORMAT_STRIKETHROUGH) t = `<s>${t}</s>`;
      return t;
    }
    if (node.type === "link" || node.type === "autolink") {
      const href = escapeHtml(node.fields?.url ?? node.url ?? "");
      const inner = (node.children ?? []).map(renderInline).join("");
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-violet-600 underline underline-offset-2 hover:text-violet-800 transition-colors">${inner}</a>`;
    }
    if (node.type === "linebreak") return "<br />";
    return (node.children ?? []).map(renderInline).join("");
  }
  function renderNode(node) {
    const children = node.children ?? [];
    switch (node.type) {
      case "paragraph": {
        const inner = children.map(renderInline).join("");
        if (!inner.trim()) return "";
        return `<p class="text-lg font-light text-gray-600 leading-relaxed mb-6">${inner}</p>`;
      }
      case "heading": {
        const tag = node.tag ?? "h2";
        const inner = children.map(renderInline).join("");
        if (!inner.trim()) return "";
        const cls = tag === "h1" ? "text-4xl font-semibold text-gray-900 mt-12 mb-5" : tag === "h2" ? "text-2xl font-semibold text-gray-900 mt-10 mb-4" : tag === "h3" ? "text-xl font-semibold text-gray-900 mt-8 mb-3" : "text-lg font-semibold text-gray-900 mt-6 mb-2";
        return `<${tag} class="${cls}">${inner}</${tag}>`;
      }
      case "list": {
        if (node.listType === "number") {
          return `<ol class="flex flex-col gap-1.5 mb-6 pl-5 list-decimal">${children.map(renderNode).join("")}</ol>`;
        }
        return `<ul class="flex flex-col gap-1.5 mb-6">${children.map(renderNode).join("")}</ul>`;
      }
      case "listitem": {
        const inner = children.map(
          (c) => c.type === "list" ? renderNode(c) : renderInline(c)
        ).join("");
        return `<li class="flex items-start gap-2 text-lg font-light text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2.5 block"></span><span>${inner}</span></li>`;
      }
      case "quote": {
        const inner = children.map(renderInline).join("");
        return `<blockquote class="border-l-4 border-violet-300 pl-6 italic text-gray-600 font-light text-lg my-8">${inner}</blockquote>`;
      }
      case "code": {
        const inner = children.map((c) => escapeHtml(c.text ?? "")).join("\n");
        return `<pre class="bg-gray-950 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm font-mono my-8"><code>${inner}</code></pre>`;
      }
      case "upload": {
        const img = node.value;
        if (!img) return "";
        const src = img.url ? `${CMS_BASE}${img.url}` : "";
        const alt = escapeHtml(img.alt ?? "");
        return `<figure class="my-8"><img src="${src}" alt="${alt}" loading="lazy" class="w-full rounded-xl object-cover" /></figure>`;
      }
      case "horizontalrule":
        return `<hr class="border-gray-200 my-10" />`;
      default:
        if (children.length > 0) {
          const inner = children.map(renderInline).join("");
          return inner ? `<p class="text-lg font-light text-gray-600 leading-relaxed mb-6">${inner}</p>` : "";
        }
        return "";
    }
  }
  function renderRichText(field) {
    if (!field) return "";
    const nodes = field?.root?.children ?? [];
    return nodes.map(renderNode).join("");
  }
  const coverUrl = mediaUrl(project.coverImage);
  const coverAlt = mediaAlt(project.coverImage, project.name);
  const stack = project.stack ?? [];
  const tags = project.tags ?? [];
  const gallery = project.gallery ?? [];
  const approachHtml = renderRichText(project.approach);
  const contentHtml = renderRichText(project.content);
  const STATUS_LABELS = {
    "in-development": "In Development",
    "in-design": "In Design",
    launched: "Launched",
    "on-hold": "On Hold",
    archived: "Archived"
  };
  const STATUS_COLORS = {
    "in-development": "text-violet-400 border-violet-500/30 bg-violet-500/10",
    "in-design": "text-blue-400 border-blue-500/30 bg-blue-500/10",
    launched: "text-green-400 border-green-500/30 bg-green-500/10",
    "on-hold": "text-amber-400 border-amber-500/30 bg-amber-500/10",
    archived: "text-gray-500 border-gray-600/30 bg-gray-500/10"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${project.name} — Project`, "description": project.tagline }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="bg-white text-gray-900 min-h-screen"> <section class="relative flex flex-col justify-end min-h-[60vh] px-6 sm:px-20 py-20 overflow-hidden bg-gray-950"> ${coverUrl && renderTemplate`<div class="absolute inset-0"> <img${addAttribute(coverUrl, "src")}${addAttribute(coverAlt, "alt")} class="w-full h-full object-cover opacity-25" loading="eager"> </div>`} <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950"></div> <!-- Ghost watermark --> <span class="absolute top-12 right-12 text-[clamp(80px,12vw,180px)] font-black text-white/5 leading-none select-none uppercase hidden lg:block"> ${project.name} </span> <div class="relative z-10 max-w-4xl"> <!-- Breadcrumb --> <div class="flex items-center gap-3 mb-6"> <a href="/projects" class="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-violet-400 transition-colors duration-200"> <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
All projects
</a> </div> <!-- Status + dates --> <div class="flex flex-wrap items-center gap-4 mb-4"> <span${addAttribute(`text-xs font-medium border px-3 py-1 rounded-full ${STATUS_COLORS[project.status]}`, "class")}> ${STATUS_LABELS[project.status]} </span> ${project.startedAt && renderTemplate`<span class="text-xs font-light text-gray-500"> ${formatDate(project.startedAt)} ${project.launchedAt && ` → ${formatDate(project.launchedAt)}`} </span>`} </div> <h1 class="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-4"> ${project.name} </h1> <p class="text-xl font-light text-gray-400 max-w-2xl leading-relaxed"> ${project.tagline} </p> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-6"> ${tags.map(({ tag }) => renderTemplate`<span class="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-gray-400"> ${tag} </span>`)} </div>`} </div> </section> <section class="px-6 sm:px-20 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-gray-100"> <!-- Sidebar --> <aside class="flex flex-col gap-8"> <!-- Links --> <div class="flex flex-col gap-3"> ${project.liveUrl && renderTemplate`<a${addAttribute(project.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors duration-200 w-fit">
View live site
<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a>`} ${project.repoUrl && renderTemplate`<a${addAttribute(project.repoUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-violet-300 hover:text-violet-600 text-gray-700 text-sm font-medium transition-colors duration-200 w-fit">
View source
<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path> </svg> </a>`} </div> ${stack.length > 0 && renderTemplate`<div> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-3">
Tech Stack
</p> <ul class="flex flex-col gap-1.5"> ${stack.map(({ technology }) => renderTemplate`<li class="flex items-center gap-2 text-sm font-light text-gray-600"> <span class="w-1 h-1 rounded-full bg-violet-400 shrink-0"></span> ${technology} </li>`)} </ul> </div>`} ${project.startedAt && renderTemplate`<div> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1">
Started
</p> <p class="text-base font-light text-gray-700"> ${formatDate(project.startedAt)} </p> </div>`} ${project.launchedAt && renderTemplate`<div> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1">
Launched
</p> <p class="text-base font-light text-gray-700"> ${formatDate(project.launchedAt)} </p> </div>`} </aside> <div class="lg:col-span-2"> ${project.summary && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-4 block">
Overview
</span> <p class="text-2xl font-light text-gray-700 leading-relaxed whitespace-pre-line"> ${project.summary} </p> ` })}`} </div> </section> ${project.problem && renderTemplate`<section class="px-6 sm:px-20 py-20 bg-gray-50 border-b border-gray-100"> <div class="max-w-3xl mx-auto"> <span class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-6 block">
The Problem
</span> <p class="text-2xl font-light text-gray-700 leading-relaxed whitespace-pre-line"> ${project.problem} </p> </div> </section>`} ${approachHtml && renderTemplate`<section class="px-6 sm:px-20 py-20 border-b border-gray-100"> <div class="max-w-3xl mx-auto"> <span class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-6 block">
The Approach
</span> <div>${unescapeHTML(approachHtml)}</div> </div> </section>`} ${gallery.length > 0 && renderTemplate`<section class="px-6 sm:px-20 py-20 bg-gray-50 border-b border-gray-100"> <span class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-10 block">
Screenshots
</span> <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"> ${gallery.map(({ image, caption }) => {
    const src = mediaUrl(image);
    const alt = mediaAlt(image, caption ?? "");
    return renderTemplate`<div class="break-inside-avoid overflow-hidden rounded-xl bg-gray-200 group"> ${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">`} ${caption && renderTemplate`<p class="px-4 py-2.5 text-xs text-gray-500 font-light bg-white border-t border-gray-100"> ${caption} </p>`} </div>`;
  })} </div> </section>`} ${contentHtml && renderTemplate`<section class="px-6 sm:px-20 py-20 border-b border-gray-100"> <div class="max-w-3xl mx-auto"> <span class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-6 block">
More Detail
</span> <div>${unescapeHTML(contentHtml)}</div> </div> </section>`} <section class="px-6 sm:px-20 py-24 bg-gray-950 flex flex-col items-center text-center gap-6"> <span class="text-xs font-medium text-violet-400 uppercase tracking-widest">
Like what you see?
</span> <h2 class="text-4xl sm:text-5xl font-semibold text-white max-w-xl leading-tight">
Let's build something together.
</h2> <p class="text-lg font-light text-gray-500 max-w-md leading-relaxed">
Tell me about your project and I'll get back to you within a day
				or two.
</p> <div class="flex flex-row items-center gap-4 mt-2"> <a href="/contact" class="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors duration-200">
Get in touch
</a> <a href="/projects" class="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-white text-sm font-light transition-colors duration-200">
See more projects
</a> </div> </section> </article> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/projects/[slug].astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
