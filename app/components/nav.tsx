"use client";
import { ArrowLeft, Instagram, LinkedIn, Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
						<Link
							href="https://instagram.com/your_username"
							target="_blank"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							<Instagram className="w-6 h-6" />
						</Link>
						<Link
							href="https://linkedin.com/in/your_username"
							target="_blank"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							<LinkedIn className="w-6 h-6" />
						</Link>
						<Link
							href="https://github.com/chronark"
							target="_blank"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							<Github className="w-6 h-6" />
						</Link>
						<Link
							href="mailto:dev@chronark.com"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							<Mail className="w-6 h-6" />
						</Link>
						<Link
							href="https://twitter.com/chronark_"
							target="_blank"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							<Twitter className="w-6 h-6" />
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
