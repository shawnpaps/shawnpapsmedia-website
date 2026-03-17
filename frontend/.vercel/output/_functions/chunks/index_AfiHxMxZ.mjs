import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { m as maybeRenderHead, c as addAttribute, b as renderTemplate, r as renderComponent } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { $ as $$PhotoMarquee } from './PhotoMarquee_BELjk8P3.mjs';

function MCPBot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim() || loading) return;
    setLoading(true);
    setReply("");
    setError("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      if (!res.ok) {
        const data2 = await res.json();
        throw new Error(data2.error || "Something went wrong");
      }
      const data = await res.json();
      setReply(data.reply);
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-center gap-4", children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "w-full flex flex-col items-center gap-2 justify-center",
        children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "Prompt", className: "relative w-full max-w-xl", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                id: "Prompt",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: "I need a web app...",
                disabled: loading,
                className: "peer mt-0.5 bg-white/10 backdrop-blur-sm rounded-full p-5 w-full min-w-[500px] lg:text-2xl border border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              }
            ),
            loading && /* @__PURE__ */ jsx("span", { className: "absolute right-5 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "animate-spin size-5 text-violet-500",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ jsx(
                    "circle",
                    {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8v8H4z"
                    }
                  )
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Press ",
            /* @__PURE__ */ jsx("span", { className: "font-mono", children: "Enter" }),
            " to send"
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error }),
    reply && /* @__PURE__ */ jsx("div", { className: "w-full max-w-xl rounded-2xl border border-gray-200 bg-white/10 backdrop-blur-sm px-6 py-4 shadow-sm text-gray-800 text-base leading-relaxed animate-fade-in", children: reply })
  ] });
}

const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WorkCard;
  const { title, client, summary, coverImage, href, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="work-card group relative block w-[480px] shrink-0 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"${addAttribute(`animation-delay: ${index * 120}ms`, "style")} data-astro-cid-r7kjq4ip> <!-- Card snapshot image --> <div class="w-[480px] h-72 overflow-hidden bg-gray-100" data-astro-cid-r7kjq4ip> <img${addAttribute(coverImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-astro-cid-r7kjq4ip> </div> <!-- Card footer --> <div class="bg-white px-5 py-4 border-t border-gray-100" data-astro-cid-r7kjq4ip> <p class="text-xs font-medium text-violet-600 uppercase tracking-widest" data-astro-cid-r7kjq4ip> ${client} </p> <h3 class="text-lg font-semibold text-gray-900 mt-1 truncate" data-astro-cid-r7kjq4ip> ${title} </h3> </div> <!-- Hover popover --> <div class="pointer-events-none absolute inset-x-0 -bottom-2 translate-y-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2 z-10" data-astro-cid-r7kjq4ip> <div class="mx-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xl" data-astro-cid-r7kjq4ip> <!-- Arrow --> <div class="absolute -top-2 left-6 size-4 rotate-45 border-l border-t border-gray-200 bg-white" data-astro-cid-r7kjq4ip></div> <p class="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1" data-astro-cid-r7kjq4ip> ${client} </p> <h4 class="text-sm font-bold text-gray-900 mb-2" data-astro-cid-r7kjq4ip>${title}</h4> <p class="text-xs text-gray-600 leading-relaxed line-clamp-3" data-astro-cid-r7kjq4ip> ${summary} </p> <span class="mt-3 inline-flex items-center gap-1 text-xs font-medium text-violet-600" data-astro-cid-r7kjq4ip>
View case study
<svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-r7kjq4ip> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" data-astro-cid-r7kjq4ip></path> </svg> </span> </div> </div> </a>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/WorkCard.astro", void 0);

const $$WorkShowcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WorkShowcase;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="work-showcase" class="w-full py-16 overflow-visible" data-astro-cid-vg6ep5tn> <h2 class="text-4xl font-light mb-10 px-20" data-astro-cid-vg6ep5tn>My work</h2> <div class="relative w-full overflow-x-auto overflow-y-visible scrollbar-hide" data-astro-cid-vg6ep5tn> <div class="flex flex-row gap-6 px-20 overflow-y-visible pb-16" data-astro-cid-vg6ep5tn> ${items.map((item, i) => renderTemplate`${renderComponent($$result, "WorkCard", $$WorkCard, { "title": item.title, "client": item.client, "summary": item.summary, "coverImage": item.coverImage, "href": `/case-studies/${item.slug}`, "index": i, "data-astro-cid-vg6ep5tn": true })}`)} </div> </div> </section>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/WorkShowcase.astro", void 0);

const $$BadgeContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row flex-wrap gap-2 justify-end"> <span class="inline-flex items-center justify-center rounded-full bg-violet-100 px-2.5 py-0.5 text-violet-700"> <p class="text-sm whitespace-nowrap">Web Design</p> </span> <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"> <p class="text-sm whitespace-nowrap">Front-End Dev</p> </span> <span class="inline-flex items-center justify-center rounded-full bg-violet-100 px-2.5 py-0.5 text-violet-700"> <p class="text-sm whitespace-nowrap">Full-Stack</p> </span> <span class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"> <p class="text-sm whitespace-nowrap">Creative Tech</p> </span> </div>`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/BadgeContainer.astro", void 0);

function ServicesPreview({ cmsBase, allPhotos }) {
  const [active, setActive] = useState("photography");
  const [fading, setFading] = useState(false);
  const [muxAssets, setMuxAssets] = useState([]);
  useEffect(() => {
    fetch("/api/mux-assets").then((r) => r.json()).then((d) => setMuxAssets(d.assets ?? [])).catch(() => {
    });
  }, []);
  const photosByKeyword = (keywords) => allPhotos.filter(
    (p) => keywords.some((k) => p.alt.toLowerCase().includes(k.toLowerCase()))
  ).slice(0, 6);
  const services = [
    {
      id: "photography",
      label: "Web Design",
      headline: "Interfaces that feel inevitable.",
      description: "UI design rooted in clarity and craft — layouts, design systems, and visual identities that translate seamlessly from Figma to production.",
      cta: "See the work",
      href: "/work",
      accent: "violet",
      photos: photosByKeyword(["Lakeview", "Haggard", "BrandHyve", "RJ"]).slice(
        0,
        4
      )
    },
    {
      id: "video",
      label: "Development",
      headline: "Built to perform, not just look good.",
      description: "Front-end and full-stack development using modern tools — React, Astro, Next.js, and whatever the project actually calls for. Fast, accessible, and maintainable.",
      cta: "Get in touch",
      href: "/contact",
      accent: "amber",
      photos: photosByKeyword(["Dark Horse", "Lakeview", "RJ"]).slice(0, 4)
    },
    {
      id: "web",
      label: "Creative Technology",
      headline: "Where code meets creativity.",
      description: "Interactive experiences, AI-powered tools, generative interfaces, and custom integrations — the kind of work that sits at the edge of what the web can do.",
      cta: "See projects",
      href: "/projects",
      accent: "emerald",
      photos: photosByKeyword(["Shawn", "BrandHyve", "Avery"]).slice(0, 4)
    }
  ];
  const current = services.find((s) => s.id === active);
  const accentClasses = {
    violet: {
      tab: "text-violet-600",
      indicator: "bg-violet-500",
      cta: "bg-violet-600 hover:bg-violet-700",
      eyebrow: "text-violet-500"
    },
    amber: {
      tab: "text-amber-600",
      indicator: "bg-amber-500",
      cta: "bg-amber-500 hover:bg-amber-600",
      eyebrow: "text-amber-500"
    },
    emerald: {
      tab: "text-emerald-600",
      indicator: "bg-emerald-500",
      cta: "bg-emerald-600 hover:bg-emerald-700",
      eyebrow: "text-emerald-500"
    }
  };
  function switchTab(id) {
    if (id === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(id);
      setFading(false);
    }, 180);
  }
  const accent = accentClasses[current.accent];
  const [hero, ...thumbs] = current.photos.length > 0 ? current.photos : [{ url: "https://placehold.co/800x600/f3f3f3/cccccc?text=.", alt: "" }];
  const isVideo = current.id === "video";
  const videoHero = muxAssets[0];
  const videoThumbs = muxAssets.slice(1, 3);
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-row items-end gap-0 border-b border-gray-100", children: services.map((s) => {
      const isActive = s.id === active;
      const a = accentClasses[s.accent];
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => switchTab(s.id),
          className: `relative px-8 py-5 text-lg font-light transition-colors duration-200 ${isActive ? a.tab + " font-medium" : "text-gray-400 hover:text-gray-700"}`,
          children: [
            s.label,
            isActive && /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute bottom-0 left-0 w-full h-0.5 ${a.indicator}`
              }
            )
          ]
        },
        s.id
      );
    }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-row items-stretch gap-0 transition-opacity duration-200 min-h-[600px] ${fading ? "opacity-0" : "opacity-100"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex-1 grid grid-cols-2 grid-rows-2 gap-2 pt-6 pr-6", children: isVideo ? /* @__PURE__ */ jsxs(Fragment, { children: [
            videoHero ? /* @__PURE__ */ jsxs(
              "a",
              {
                href: `https://stream.mux.com/${videoHero.playbackId}.m3u8`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "row-span-2 relative rounded-2xl overflow-hidden bg-gray-900 group",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: videoHero.thumbnailUrl,
                      alt: videoHero.title ?? "Video",
                      className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "w-6 h-6 text-gray-900 ml-1",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" })
                    }
                  ) }) }),
                  videoHero.title && /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: videoHero.title }) })
                ]
              }
            ) : /* @__PURE__ */ jsx("div", { className: "row-span-2 rounded-2xl bg-gray-100 animate-pulse" }),
            [0, 1].map(
              (i) => videoThumbs[i] ? /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `https://stream.mux.com/${videoThumbs[i].playbackId}.m3u8`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "relative rounded-xl overflow-hidden bg-gray-900 group",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: videoThumbs[i].thumbnailUrl,
                        alt: videoThumbs[i].title ?? "Video",
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200", children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-4 h-4 text-gray-900 ml-0.5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" })
                      }
                    ) }) })
                  ]
                },
                i
              ) : /* @__PURE__ */ jsx(
                "div",
                {
                  className: "rounded-xl bg-gray-100 animate-pulse"
                },
                i
              )
            )
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            hero && /* @__PURE__ */ jsx("div", { className: "row-span-2 rounded-2xl overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: hero.url.startsWith("http") ? hero.url : `${cmsBase}${hero.url}`,
                alt: hero.alt,
                className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ) }),
            thumbs[0] ? /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: thumbs[0].url.startsWith("http") ? thumbs[0].url : `${cmsBase}${thumbs[0].url}`,
                alt: thumbs[0].alt,
                className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ) }) : /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-gray-50 border border-gray-100" }),
            thumbs[1] ? /* @__PURE__ */ jsx("div", { className: "rounded-xl overflow-hidden bg-gray-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: thumbs[1].url.startsWith("http") ? thumbs[1].url : `${cmsBase}${thumbs[1].url}`,
                alt: thumbs[1].alt,
                className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ) }) : /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-gray-50 border border-gray-100" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "w-96 shrink-0 flex flex-col justify-center gap-8 pl-16 pt-6", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `text-xs font-semibold uppercase tracking-widest ${accent.eyebrow}`,
                children: current.label
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-5xl font-semibold text-gray-900 leading-tight", children: current.headline }),
            /* @__PURE__ */ jsx("p", { className: "text-lg font-light text-gray-500 leading-relaxed", children: current.description }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: current.href,
                className: `self-start px-8 py-4 rounded-full text-white text-sm font-medium transition-colors duration-200 ${accent.cta}`,
                children: [
                  current.cta,
                  " →"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  console.log("[index.astro] CMS_BASE =", CMS_BASE);
  let marqueePhotos = [];
  let workItems = [];
  try {
    const mediaRes = await fetch(`${CMS_BASE}/api/media?limit=100&depth=0`);
    const mediaData = await mediaRes.json();
    marqueePhotos = (mediaData?.docs ?? []).filter((d) => d.mimeType?.startsWith("image/")).map((d) => ({
      url: d.url,
      alt: d.alt ?? "",
      width: d.width,
      height: d.height
    }));
    console.log("[index.astro] marqueePhotos fetched:", marqueePhotos.length);
  } catch (e) {
    console.error("Failed to fetch media for marquee:", e);
  }
  try {
    const workRes = await fetch(
      `${CMS_BASE}/api/case-studies?limit=20&depth=1`
    );
    const workData = await workRes.json();
    workItems = (workData?.docs ?? []).map((d) => ({
      title: d.title ?? "Untitled",
      client: d.client ?? "",
      summary: d.summary ?? "",
      coverImage: d.coverImage?.url ? `${CMS_BASE}${d.coverImage.url}` : "https://placehold.co/288x192",
      slug: d.slug ?? d.id
    }));
  } catch (e) {
    console.error("Failed to fetch case studies:", e);
  }
  if (workItems.length === 0) {
    workItems = [
      {
        title: "Example Project One",
        client: "Client A",
        summary: "A brief overview of what this project involved, what problems were solved, and what was delivered.",
        coverImage: "https://placehold.co/288x192",
        slug: "example-project-one"
      },
      {
        title: "Example Project Two",
        client: "Client B",
        summary: "A brief overview of what this project involved, what problems were solved, and what was delivered.",
        coverImage: "https://placehold.co/288x192",
        slug: "example-project-two"
      },
      {
        title: "Example Project Three",
        client: "Client C",
        summary: "A brief overview of what this project involved, what problems were solved, and what was delivered.",
        coverImage: "https://placehold.co/288x192",
        slug: "example-project-three"
      },
      {
        title: "Example Project Four",
        client: "Client D",
        summary: "A brief overview of what this project involved, what problems were solved, and what was delivered.",
        coverImage: "https://placehold.co/288x192",
        slug: "example-project-four"
      },
      {
        title: "Example Project Five",
        client: "Client E",
        summary: "A brief overview of what this project involved, what problems were solved, and what was delivered.",
        coverImage: "https://placehold.co/288x192",
        slug: "example-project-five"
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center min-h-screen"> <!-- Hero --> <section class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 w-full px-6 sm:px-12 lg:px-20 pt-16 pb-20"> <div class="flex flex-col sm:flex-row items-center sm:items-start gap-8"> <div class="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shrink-0"> <img class="w-full h-full object-cover"${addAttribute(`${CMS_BASE}/api/media/file/shawn-camera`, "src")} alt="Shawn Papineau — photographer,
 videographer, and web developer" loading="eager"> </div> <div class="max-w-lg text-center sm:text-left"> <h1 class="text-5xl lg:text-6xl font-semibold">
Hey, I'm Shawn.
</h1> <p class="text-xl lg:text-2xl font-light mt-4">
I build websites & tools for people doing interesting
						things. <br><br> I'm a creative technologist based in
						Tampa — focused on web development, web design, and the interfaces
						that make brands feel alive online.
</p> </div> </div> <div class="flex flex-col items-center lg:items-end gap-4 shrink-0"> <div class="p-2 flex flex-row items-center gap-2 bg-gray-100 rounded-full w-fit px-4 mb-2"> <div class="w-2 animate-pulse h-2 bg-red-600 rounded-full"></div> <p>Tampa, FL</p> </div> <div id="badges" class="flex flex-wrap justify-center lg:justify-end gap-2"> ${renderComponent($$result2, "BadgeContainer", $$BadgeContainer, {})} </div> </div> </section> <!-- MCP Bot section with marquee as background --> <section class="relative w-screen min-h-[40em] flex justify-center items-center"> <!-- Marquee background --> <div class="absolute inset-0 z-0"> ${renderComponent($$result2, "PhotoMarquee", $$PhotoMarquee, { "photos": marqueePhotos, "cmsBase": CMS_BASE })} </div> <!-- Overlay --> <div class="absolute inset-0 z-10 bg-white/30"></div> <!-- Content --> <div class="relative z-20 flex flex-col items-center gap-4 py-40 px-6 sm:px-20 justify-center bg-white/70 rounded-2xl w-fit mx-auto hover:bg-white transition-all ease-linear duration-200"> <h2 class="text-4xl font-medium text-center">
Ask me anything
</h2> <p class="text-gray-600 text-base font-light">
What I build, how I work, what a project costs — ask
					anything.
</p> ${renderComponent($$result2, "MCPBot", MCPBot, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/react/mcp-bot.tsx", "client:component-export": "default" })} </div> </section> <!-- Services preview --> <section class="w-screen px-6 sm:px-20 py-20 border-t border-gray-100"> <div class="flex flex-col gap-4 mb-10"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">What I do</span> <h2 class="text-4xl font-semibold text-gray-900">
Code, design, and everything in between.
</h2> </div> ${renderComponent($$result2, "ServicesPreview", ServicesPreview, { "cmsBase": CMS_BASE, "allPhotos": marqueePhotos, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/react/ServicesPreview.tsx", "client:component-export": "default" })} </section> <!-- Work showcase --> <section class="w-screen border-t border-gray-100 overflow-visible"> ${renderComponent($$result2, "WorkShowcase", $$WorkShowcase, { "items": workItems })} </section> <!-- Available for work CTA --> <section class="w-full px-6 sm:px-20 py-20 border-t border-gray-100"> <div class="max-w-lg mx-auto text-center flex flex-col items-center gap-6"> <h2 class="text-4xl font-light">Let's build something.</h2> <p class="text-xl font-light text-gray-500">
I'm currently available for new projects. Whether you need a
					full site from scratch, a design system, or a tricky
					integration — I'd love to hear about it.
</p> <a href="/contact" class="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors duration-200">
Get in touch →
</a> </div> </section> </main> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/index.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
