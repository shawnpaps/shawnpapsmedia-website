import React, { useState } from "react";

export type WorkCategory =
	| "web-app"
	| "design-system"
	| "e-commerce"
	| "branding"
	| "marketing-site";

export interface WorkItem {
	title: string;
	client: string;
	summary: string;
	coverImage: string;
	href: string;
	category?: WorkCategory | null;
}

const CATEGORY_LABELS: Record<WorkCategory, string> = {
	"web-app": "Web Apps",
	"design-system": "Design Systems",
	"e-commerce": "E-Commerce",
	branding: "Branding",
	"marketing-site": "Marketing Sites",
};

interface WorkCardProps {
	item: WorkItem;
	index: number;
}

function WorkCard({ item, index }: WorkCardProps) {
	return (
		<a
			href={item.href}
			className="work-card group relative block rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
			style={{ animationDelay: `${index * 120}ms` }}
		>
			{/* Cover image */}
			<div className="w-full h-64 overflow-hidden bg-gray-100">
				<img
					src={item.coverImage}
					alt={item.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			{/* Card footer */}
			<div className="bg-white px-5 py-4 border-t border-gray-100">
				<p className="text-xs font-medium text-violet-600 uppercase tracking-widest">
					{item.client}
				</p>
				<h3 className="text-lg font-semibold text-gray-900 mt-1 truncate">
					{item.title}
				</h3>
				{item.category && (
					<span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-600 text-xs font-medium">
						{CATEGORY_LABELS[item.category]}
					</span>
				)}
			</div>

			{/* Hover popover */}
			<div className="pointer-events-none absolute inset-x-0 -bottom-2 translate-y-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2 z-10">
				<div className="mx-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
					{/* Arrow */}
					<div className="absolute -top-2 left-6 size-4 rotate-45 border-l border-t border-gray-200 bg-white" />

					<p className="text-xs font-semibold text-violet-600 uppercase tracking-widest mb-1">
						{item.client}
					</p>
					<h4 className="text-sm font-bold text-gray-900 mb-2">
						{item.title}
					</h4>
					<p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
						{item.summary}
					</p>

					<span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-violet-600">
						View case study
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="size-3"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</div>
			</div>
		</a>
	);
}

interface WorkGridProps {
	items: WorkItem[];
}

export default function WorkGrid({ items }: WorkGridProps) {
	const [activeCategory, setActiveCategory] = useState<WorkCategory | null>(
		null,
	);

	// Derive only the categories that actually exist in the data
	const presentCategories = Array.from(
		new Set(
			items
				.map((i) => i.category)
				.filter((c): c is WorkCategory => Boolean(c)),
		),
	).sort((a, b) =>
		CATEGORY_LABELS[a].localeCompare(CATEGORY_LABELS[b]),
	);

	const filtered =
		activeCategory === null
			? items
			: items.filter((i) => i.category === activeCategory);

	return (
		<div className="flex flex-col gap-12">
			{/* Filter row — only shown if at least one category exists */}
			{presentCategories.length > 0 && (
				<div className="flex flex-row flex-wrap items-center gap-3">
					<button
						onClick={() => setActiveCategory(null)}
						className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
							activeCategory === null
								? "bg-violet-600 text-white"
								: "text-gray-500 border border-gray-200 hover:border-violet-300 hover:text-violet-600"
						}`}
					>
						All
					</button>

					{presentCategories.map((cat) => (
						<button
							key={cat}
							onClick={() =>
								setActiveCategory(
									activeCategory === cat ? null : cat,
								)
							}
							className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
								activeCategory === cat
									? "bg-violet-600 text-white"
									: "text-gray-500 border border-gray-200 hover:border-violet-300 hover:text-violet-600"
							}`}
						>
							{CATEGORY_LABELS[cat]}
						</button>
					))}
				</div>
			)}

			{/* Cards grid */}
			<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-24">
				{filtered.length > 0 ? (
					filtered.map((item, i) => (
						<WorkCard key={item.href} item={item} index={i} />
					))
				) : (
					<p className="col-span-full text-gray-400 font-light text-lg py-16 text-center">
						No projects in this category yet.
					</p>
				)}
			</section>
		</div>
	);
}
