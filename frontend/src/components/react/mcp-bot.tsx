import { useState, useRef, useEffect } from "react";

export default function MCPBot() {
	const [message, setMessage] = useState("");
	const [reply, setReply] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!message.trim() || loading) return;

		setLoading(true);
		setReply("");
		setError("");

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message }),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || "Something went wrong");
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

	return (
		<div className="w-full flex flex-col items-center gap-4">
			<form
				onSubmit={handleSubmit}
				className="w-full flex flex-col items-center gap-2 justify-center"
			>
				<label htmlFor="Prompt" className="relative w-full max-w-xl">
					<input
						ref={inputRef}
						type="text"
						id="Prompt"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="I need a web app..."
						disabled={loading}
						className="peer mt-0.5 bg-white/10 backdrop-blur-sm rounded-full p-5 w-full min-w-[500px] lg:text-2xl border border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
					/>
					{loading && (
						<span className="absolute right-5 top-1/2 -translate-y-1/2">
							<svg
								className="animate-spin size-5 text-violet-500"
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
						</span>
					)}
				</label>
				<p>
					Press <span className="font-mono">Enter</span> to send
				</p>
			</form>

			{error && <p className="text-sm text-red-500">{error}</p>}

			{reply && (
				<div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white/10 backdrop-blur-sm px-6 py-4 shadow-sm text-gray-800 text-base leading-relaxed animate-fade-in">
					{reply}
				</div>
			)}
		</div>
	);
}
