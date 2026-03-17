import { Client } from '@notionhq/client';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: ".env.local" });
const prerender = false;
const notion = new Client({ auth: process.env.NOTION_API_SECRET });
const resend = new Resend(process.env.RESEND_API_KEY);
const DATABASE_ID = "3173dfc4d57780beba51fb1128ace7cc";
const MY_EMAIL = "shawn@shawnpapsmedia.com";
const POST = async ({ request }) => {
  try {
    const { name, email, phone, budget, notes } = await request.json();
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name } }]
        },
        Email: {
          email
        },
        Phone: {
          phone_number: phone || null
        },
        Budget: {
          rich_text: [{ text: { content: budget || "" } }]
        },
        Notes: {
          rich_text: [{ text: { content: notes || "" } }]
        },
        "Lead Status": {
          status: { name: "New" }
        },
        "Lead Source": {
          select: { name: "Website" }
        }
      }
    });
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: MY_EMAIL,
      subject: `New lead from ${name}`,
      html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
					<h2 style="color: #7C3AED; margin-bottom: 4px;">New contact form submission</h2>
					<p style="color: #888; font-size: 14px; margin-top: 0;">Via your portfolio website</p>
					<hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
					<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
						<tr>
							<td style="padding: 8px 0; color: #888; width: 100px;">Name</td>
							<td style="padding: 8px 0; font-weight: 600;">${name}</td>
						</tr>
						<tr>
							<td style="padding: 8px 0; color: #888;">Email</td>
							<td style="padding: 8px 0;">${email}</td>
						</tr>
						${phone ? `
						<tr>
							<td style="padding: 8px 0; color: #888;">Phone</td>
							<td style="padding: 8px 0;">${phone}</td>
						</tr>` : ""}
						${budget ? `
						<tr>
							<td style="padding: 8px 0; color: #888;">Budget</td>
							<td style="padding: 8px 0;">${budget}</td>
						</tr>` : ""}
						${notes ? `
						<tr>
							<td style="padding: 8px 0; color: #888; vertical-align: top;">Notes</td>
							<td style="padding: 8px 0;">${notes}</td>
						</tr>` : ""}
					</table>
					<hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
					<a href="https://notion.so" style="display: inline-block; padding: 10px 20px; background: #7C3AED; color: white; border-radius: 999px; text-decoration: none; font-size: 14px;">
						View in Notion
					</a>
				</div>
			`
    });
    await resend.emails.send({
      from: "Shawn Papineau <onboarding@resend.dev>",
      to: email,
      subject: "Got your message — I'll be in touch soon.",
      html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
					<h2 style="color: #7C3AED;">Hey ${name.split(" ")[0]}, thanks for reaching out.</h2>
					<p style="font-size: 16px; line-height: 1.7; color: #444;">
						I got your message and I'll get back to you as soon as I can — usually within a day or two.
					</p>
					<p style="font-size: 16px; line-height: 1.7; color: #444;">
						In the meantime, feel free to take a look at some of my recent work at
						<a href="https://shawnpapineau.com/work" style="color: #7C3AED;">shawnpapineau.com/work</a>.
					</p>
					<hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
					<p style="font-size: 14px; color: #888;">— Shawn</p>
				</div>
			`
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
