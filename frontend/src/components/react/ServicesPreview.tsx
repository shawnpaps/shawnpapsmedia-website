import { useState, useEffect } from "react";

interface Photo {
	url: string;
	alt: string;
}

interface Service {
	id: string;
	label: string;
	headline: string;
	description: string;
	cta: string;
	href: string;
	accent: string;
	photos: Photo[];
}

interface MuxAsset {
	id: string;
	playbackId: string;
	duration: number;
	aspectRatio: string;
	title: string | null;
	thumbnailUrl: string;
	streamUrl: string;
}

interface Props {
	cmsBase: string;
	allPhotos: Photo[];
}

export default function ServicesPreview({ cmsBase, allPhotos }: Props) {
	const [active, setActive] = useState("photography");
	const [fading, setFading] = useState(false);
	const [muxAssets, setMuxAssets] = useState<MuxAsset[]>([]);

	useEffect(() => {
		fetch("/api/mux-assets")
			.then((r) => r.json())
			.then((d) => setMuxAssets(d.assets ?? []))
			.catch(() => {});
	}, []);

	// Filter photos by rough keyword matching on alt text
	const photosByKeyword = (keywords: string[]) =>
		allPhotos
			.filter((p) =>
				keywords.some((k) => p.alt.toLowerCase().includes(k.toLowerCase())),
			)
			.slice(0, 6);

	const services: Service[] = [
		{
			id: "photography",
			label: "Photo",
			headline: "We make brands look like they mean it.",
			description:
				"Cinematic photography for independent brands — barbers, coffee shops, real estate, events. The kind of imagery that makes people stop scrolling and actually look.",
			cta: "See the work",
			href: "/photography/brand-media",
			accent: "amber",
			photos: photosByKeyword(["Lakeview", "Haggard", "BrandHyve", "RJ"]).slice(
				0,
				4,
			),
		},
		{
			id: "video",
			label: "Video",
			headline: "Stories that move — literally.",
			description:
				"Cinematic video for music artists, brands, and events. Music videos, brand content, event coverage — shot, edited, and delivered. No stock footage. No filler.",
			cta: "See the work",
			href: "/contact",
			accent: "violet",
			photos: photosByKeyword(["Dark Horse", "Lakeview", "RJ"]).slice(0, 4),
		},
		{
			id: "web",
			label: "Web",
			headline: "The site should be as good as the shoot.",
			description:
				"Custom websites and digital presence built to match the quality of your visual content. Not a template. Not a theme. A real site that looks like you mean it.",
			cta: "See the work",
			href: "/work",
			accent: "emerald",
			photos: photosByKeyword(["Shawn", "BrandHyve", "Avery"]).slice(0, 4),
		},
	];

	const current = services.find((s) => s.id === active)!;

	const accentClasses: Record<
		string,
		{ tab: string; indicator: string; cta: string; eyebrow: string }
	> = {
		violet: {
			tab: "text-violet-600",
			indicator: "bg-violet-500",
			cta: "bg-violet-600 hover:bg-violet-700",
			eyebrow: "text-violet-500",
		},
		amber: {
			tab: "text-amber-600",
			indicator: "bg-amber-500",
			cta: "bg-amber-500 hover:bg-amber-600",
			eyebrow: "text-amber-500",
		},
		emerald: {
			tab: "text-emerald-600",
			indicator: "bg-emerald-500",
			cta: "bg-emerald-600 hover:bg-emerald-700",
			eyebrow: "text-emerald-500",
		},
	};

	function switchTab(id: string) {
		if (id === active) return;
		setFading(true);
		setTimeout(() => {
			setActive(id);
			setFading(false);
		}, 180);
	}

	const accent = accentClasses[current.accent];

	// Pick a large preview image and up to 3 smaller ones
	const [hero, ...thumbs] =
		current.photos.length > 0
			? current.photos
			: [{ url: "https://placehold.co/800x600/f3f3f3/cccccc?text=.", alt: "" }];

	// For the video tab, use mux thumbnails instead
	const isVideo = current.id === "video";
	const videoHero = muxAssets[0];
	const videoThumbs = muxAssets.slice(1, 3);

	return (
		<div className="w-full flex flex-col">
			{/* Tab bar */}
			<div className="flex flex-row items-end gap-0 border-b border-gray-100">
				{services.map((s) => {
					const isActive = s.id === active;
					const a = accentClasses[s.accent];
					return (
						<button
							key={s.id}
							onClick={() => switchTab(s.id)}
							className={`relative px-8 py-5 text-lg font-light transition-colors duration-200 ${
								isActive
									? a.tab + " font-medium"
									: "text-gray-400 hover:text-gray-700"
							}`}
						>
							{s.label}
							{isActive && (
								<span
									className={`absolute bottom-0 left-0 w-full h-0.5 ${a.indicator}`}
								/>
							)}
						</button>
					);
				})}
			</div>

			{/* Panel */}
			<div
				className={`flex flex-row items-stretch gap-0 transition-opacity duration-200 min-h-[600px] ${
					fading ? "opacity-0" : "opacity-100"
				}`}
			>
				{/* Image grid — left half */}
				<div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 pt-6 pr-6">
					{isVideo ? (
						<>
							{/* Mux hero video thumbnail */}
							{videoHero ? (
								<a
									href={`https://stream.mux.com/${videoHero.playbackId}.m3u8`}
									target="_blank"
									rel="noopener noreferrer"
									className="row-span-2 relative rounded-2xl overflow-hidden bg-gray-900 group"
								>
									<img
										src={videoHero.thumbnailUrl}
										alt={videoHero.title ?? "Video"}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
											<svg
												className="w-6 h-6 text-gray-900 ml-1"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</div>
									{videoHero.title && (
										<div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
											<p className="text-white text-sm font-medium">
												{videoHero.title}
											</p>
										</div>
									)}
								</a>
							) : (
								<div className="row-span-2 rounded-2xl bg-gray-100 animate-pulse" />
							)}
							{/* Mux thumbs */}
							{[0, 1].map((i) =>
								videoThumbs[i] ? (
									<a
										key={i}
										href={`https://stream.mux.com/${videoThumbs[i].playbackId}.m3u8`}
										target="_blank"
										rel="noopener noreferrer"
										className="relative rounded-xl overflow-hidden bg-gray-900 group"
									>
										<img
											src={videoThumbs[i].thumbnailUrl}
											alt={videoThumbs[i].title ?? "Video"}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200">
												<svg
													className="w-4 h-4 text-gray-900 ml-0.5"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M8 5v14l11-7z" />
												</svg>
											</div>
										</div>
									</a>
								) : (
									<div
										key={i}
										className="rounded-xl bg-gray-100 animate-pulse"
									/>
								),
							)}
						</>
					) : (
						<>
							{/* Hero image — spans both rows on left col */}
							{hero && (
								<div className="row-span-2 rounded-2xl overflow-hidden bg-gray-100">
									<img
										src={
											hero.url.startsWith("http")
												? hero.url
												: `${cmsBase}${hero.url}`
										}
										alt={hero.alt}
										className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
									/>
								</div>
							)}
							{/* Top-right thumb */}
							{thumbs[0] ? (
								<div className="rounded-xl overflow-hidden bg-gray-100">
									<img
										src={
											thumbs[0].url.startsWith("http")
												? thumbs[0].url
												: `${cmsBase}${thumbs[0].url}`
										}
										alt={thumbs[0].alt}
										className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
									/>
								</div>
							) : (
								<div className="rounded-xl bg-gray-50 border border-gray-100" />
							)}
							{/* Bottom-right thumb */}
							{thumbs[1] ? (
								<div className="rounded-xl overflow-hidden bg-gray-100">
									<img
										src={
											thumbs[1].url.startsWith("http")
												? thumbs[1].url
												: `${cmsBase}${thumbs[1].url}`
										}
										alt={thumbs[1].alt}
										className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
									/>
								</div>
							) : (
								<div className="rounded-xl bg-gray-50 border border-gray-100" />
							)}
						</>
					)}
				</div>

				{/* Text content — right side */}
				<div className="w-96 shrink-0 flex flex-col justify-center gap-8 pl-16 pt-6">
					<span
						className={`text-xs font-semibold uppercase tracking-widest ${accent.eyebrow}`}
					>
						{current.label}
					</span>
					<h3 className="text-5xl font-semibold text-gray-900 leading-tight">
						{current.headline}
					</h3>
					<p className="text-lg font-light text-gray-500 leading-relaxed">
						{current.description}
					</p>
					<a
						href={current.href}
						className={`self-start px-8 py-4 rounded-full text-white text-sm font-medium transition-colors duration-200 ${accent.cta}`}
					>
						{current.cta} →
					</a>
				</div>
			</div>
		</div>
	);
}
