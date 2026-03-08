import type { APIRoute } from "astro";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export const prerender = false;

export const GET: APIRoute = async () => {
	const tokenId = process.env.MUX_TOKEN_ID;
	const tokenSecret = process.env.MUX_TOKEN_SECRET;

	if (!tokenId || !tokenSecret) {
		return new Response(JSON.stringify({ error: "Mux credentials not set." }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		const credentials = Buffer.from(`${tokenId}:${tokenSecret}`).toString("base64");

		const res = await fetch("https://api.mux.com/video/v1/assets?limit=25&status=ready", {
			headers: {
				Authorization: `Basic ${credentials}`,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			const text = await res.text();
			console.error("Mux API error:", text);
			return new Response(JSON.stringify({ error: "Failed to fetch from Mux." }), {
				status: res.status,
				headers: { "Content-Type": "application/json" },
			});
		}

		const data = await res.json();

		const assets = (data.data ?? [])
			.filter((a: any) => a.status === "ready" && a.playback_ids?.length > 0)
			.map((a: any) => {
				const playbackId = a.playback_ids.find((p: any) => p.policy === "public")?.id
					?? a.playback_ids[0].id;
				return {
					id: a.id,
					playbackId,
					duration: a.duration,
					aspectRatio: a.aspect_ratio ?? "16:9",
					title: a.meta?.title ?? null,
					thumbnailUrl: `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0&width=640`,
					streamUrl: `https://stream.mux.com/${playbackId}.m3u8`,
				};
			});

		return new Response(JSON.stringify({ assets }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Mux fetch error:", error);
		return new Response(JSON.stringify({ error: "Something went wrong." }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
