import { useState } from "react";

interface FormState {
	name: string;
	email: string;
	phone: string;
	budget: string;
	notes: string;
}

const initialState: FormState = {
	name: "",
	email: "",
	phone: "",
	budget: "",
	notes: "",
};

const budgetOptions = [
	"Under $1,000",
	"$1,000 – $5,000",
	"$5,000 – $15,000",
	"$15,000+",
	"Let's talk",
];

export default function ContactForm() {
	const [form, setForm] = useState<FormState>(initialState);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	function handleChange(
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (loading) return;

		setLoading(true);
		setError("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
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
		return (
			<div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
				<div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center">
					<svg
						className="w-7 h-7 text-violet-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 className="text-2xl font-semibold text-gray-900">
					Message sent!
				</h3>
				<p className="text-base font-light text-gray-500 max-w-sm">
					Thanks for reaching out. I'll get back to you within a day or
					two. Check your inbox for a confirmation.
				</p>
				<button
					onClick={() => setSuccess(false)}
					className="mt-2 text-sm text-violet-600 hover:underline"
				>
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
			{/* Name + Email */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-sm font-medium text-gray-700"
					>
						Name <span className="text-violet-500">*</span>
					</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						value={form.name}
						onChange={handleChange}
						placeholder="Jane Smith"
						className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-sm font-medium text-gray-700"
					>
						Email <span className="text-violet-500">*</span>
					</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						value={form.email}
						onChange={handleChange}
						placeholder="jane@company.com"
						className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
					/>
				</div>
			</div>

			{/* Phone + Budget */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="phone"
						className="text-sm font-medium text-gray-700"
					>
						Phone{" "}
						<span className="text-gray-400 font-light">(optional)</span>
					</label>
					<input
						id="phone"
						name="phone"
						type="tel"
						value={form.phone}
						onChange={handleChange}
						placeholder="+1 (555) 000-0000"
						className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label
						htmlFor="budget"
						className="text-sm font-medium text-gray-700"
					>
						Budget{" "}
						<span className="text-gray-400 font-light">(optional)</span>
					</label>
					<select
						id="budget"
						name="budget"
						value={form.budget}
						onChange={handleChange}
						className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition appearance-none"
					>
						<option value="">Select a range...</option>
						{budgetOptions.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Notes */}
			<div className="flex flex-col gap-2">
				<label
					htmlFor="notes"
					className="text-sm font-medium text-gray-700"
				>
					Anything I should know?{" "}
					<span className="text-gray-400 font-light">(optional)</span>
				</label>
				<textarea
					id="notes"
					name="notes"
					rows={5}
					value={form.notes}
					onChange={handleChange}
					placeholder="Tell me about your project, timeline, goals — whatever feels relevant."
					className="w-full rounded-xl border border-gray-200 bg-white/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 transition resize-none"
				/>
			</div>

			{error && (
				<p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
					{error}
				</p>
			)}

			<button
				type="submit"
				disabled={loading}
				className="w-full sm:w-auto justify-center self-start px-8 py-3.5 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
			>
				{loading ? (
					<>
						<svg
							className="animate-spin size-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8v8H4z"
							/>
						</svg>
						Sending...
					</>
				) : (
					"Send message"
				)}
			</button>
		</form>
	);
}
