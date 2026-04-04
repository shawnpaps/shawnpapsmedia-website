import type { APIRoute } from "astro";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export const prerender = false;

const resend = new Resend(process.env.RESEND_API_KEY);
const MY_EMAIL = "spapineau@spaptechnology.com";

function escapeHtml(input: string) {
	return input
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const { name, email, phone, budget, notes } = await request.json();

		if (!name || !email) {
			return new Response(
				JSON.stringify({ error: "Name and email are required." }),
				{ status: 400, headers: { "Content-Type": "application/json" } },
			);
		}

		const safeName = escapeHtml(name);
		const safeEmail = escapeHtml(email);
		const safePhone = escapeHtml(phone || "-");
		const safeBudget = escapeHtml(budget || "-");
		const safeNotes = escapeHtml(notes || "-");

		// Send lead email
		await resend.emails.send({
			from: "sudo create Contact <onboarding@resend.dev>",
			to: MY_EMAIL,
			subject: `New sudo create lead: ${name}`,
			html: `
				<div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; color: #111;">
					<h2 style="margin-bottom: 10px;">New lead: ${safeName}</h2>
					<p style="margin: 0 0 18px; color: #666;">Submitted from the sudo create website contact form.</p>
					<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
						<tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;">${safeName}</td></tr>
						<tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${safeEmail}</td></tr>
						<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${safePhone}</td></tr>
						<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${safeBudget}</td></tr>
						<tr><td style="padding: 8px 0; color: #666; vertical-align: top;">Notes</td><td style="padding: 8px 0; white-space: pre-wrap;">${safeNotes}</td></tr>
					</table>
				</div>
			`,
		});

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Contact form error:", error);
		return new Response(
			JSON.stringify({ error: "Something went wrong. Please try again." }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
};
