import { c as createComponent } from './astro-component_j14fbpTm.mjs';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_DU0NaWmc.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CLRkvEkd.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$PhotoMarquee } from './PhotoMarquee_BELjk8P3.mjs';

const initialState = {
  name: "",
  email: "",
  phone: "",
  budget: "",
  notes: ""
};
const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Let's talk"
];
function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }
  if (success) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 py-20 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "w-7 h-7 text-violet-600",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5 13l4 4L19 7"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-900", children: "Message sent!" }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-light text-gray-500 max-w-sm", children: "Thanks for reaching out. I'll get back to you within a day or two. Check your inbox for a confirmation." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSuccess(false),
          className: "mt-2 text-sm text-violet-600 hover:underline",
          children: "Send another message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-6 w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "name",
            className: "text-sm font-medium text-gray-700",
            children: [
              "Name ",
              /* @__PURE__ */ jsx("span", { className: "text-violet-500", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            name: "name",
            type: "text",
            required: true,
            value: form.name,
            onChange: handleChange,
            placeholder: "Jane Smith",
            className: "w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "email",
            className: "text-sm font-medium text-gray-700",
            children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { className: "text-violet-500", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            required: true,
            value: form.email,
            onChange: handleChange,
            placeholder: "jane@company.com",
            className: "w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "phone",
            className: "text-sm font-medium text-gray-700",
            children: [
              "Phone",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-light", children: "(optional)" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "phone",
            name: "phone",
            type: "tel",
            value: form.phone,
            onChange: handleChange,
            placeholder: "+1 (555) 000-0000",
            className: "w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxs(
          "label",
          {
            htmlFor: "budget",
            className: "text-sm font-medium text-gray-700",
            children: [
              "Budget",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-light", children: "(optional)" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "budget",
            name: "budget",
            value: form.budget,
            onChange: handleChange,
            className: "w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition appearance-none",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select a range..." }),
              budgetOptions.map((opt) => /* @__PURE__ */ jsx("option", { value: opt, children: opt }, opt))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "notes",
          className: "text-sm font-medium text-gray-700",
          children: [
            "Anything I should know?",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-light", children: "(optional)" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "notes",
          name: "notes",
          rows: 5,
          value: form.notes,
          onChange: handleChange,
          placeholder: "Tell me about your project, timeline, goals — whatever feels relevant.",
          className: "w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition resize-none"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3", children: error }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "self-start px-8 py-3 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2",
        children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin size-4",
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
          ),
          "Sending..."
        ] }) : "Send message"
      }
    )
  ] });
}

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const CMS_BASE = "https://shawnpapsmedia-website.vercel.app";
  console.log("[index.astro] CMS_BASE =", CMS_BASE);
  let marqueePhotos = [];
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col min-h-screen px-20 py-16 gap-20"> <!-- Page header --> <section class="flex flex-row items-start justify-between gap-16 w-full"> <div class="flex flex-col gap-6 max-w-xl"> <span class="text-xs font-medium text-violet-600 uppercase tracking-widest">
Contact
</span> <h1 class="text-6xl font-semibold text-gray-900 leading-tight">
Let's work together.
</h1> <p class="text-xl font-light text-gray-500 leading-relaxed">
Got a site to build, a design to bring to life, or an idea
					that needs a technical partner? Tell me about it and I'll
					get back to you within a day or two.
</p> <!-- Availability badge --> <div class="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100"> <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> <p class="text-sm text-emerald-700 font-medium">
Currently taking on new projects
</p> </div> <!-- Contact details --> <div class="flex flex-col gap-4 mt-4"> <a href="mailto:shawn@shawnpapineau.com" class="flex items-center gap-3 text-gray-500 hover:text-violet-600 transition-colors duration-200 group"> <div class="w-9 h-9 rounded-full border border-gray-100 bg-white flex items-center justify-center group-hover:border-violet-200 transition-colors duration-200"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path> </svg> </div> <span class="text-sm">shawn@shawnpapineau.com</span> </a> <a href="https://linkedin.com/in/shawnpapineau" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-gray-500 hover:text-violet-600 transition-colors duration-200 group"> <div class="w-9 h-9 rounded-full border border-gray-100 bg-white flex items-center justify-center group-hover:border-violet-200 transition-colors duration-200"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </div> <span class="text-sm">linkedin.com/in/shawnpapineau</span> </a> <div class="flex items-center gap-3 text-gray-500"> <div class="w-9 h-9 rounded-full border border-gray-100 bg-white flex items-center justify-center"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path> </svg> </div> <span class="text-sm">Tampa, FL</span> </div> </div> </div> <!-- Form --> <div class="flex-1 max-w-2xl w-full bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl p-10 shadow-sm"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/components/react/ContactForm.tsx", "client:component-export": "default" })} </div> </section> <section> ${renderComponent($$result2, "PhotoMarquee", $$PhotoMarquee, { "photos": marqueePhotos, "cmsBase": CMS_BASE })} </section> </main> ` })}`;
}, "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/contact.astro", void 0);
const $$file = "/Users/shawnpapineau/Developer/spap/portfolio/frontend/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
