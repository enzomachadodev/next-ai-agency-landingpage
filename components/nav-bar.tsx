"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/data";
import { ShimmerButton } from "./ui/shimmer-button";
import { cn } from "@/lib/utils";

export const NavBar = () => {
	const [onScroll, setOnScroll] = useState<boolean>(true);
	const [activeSection, setActiveSection] = useState<string>("");

	const handleScroll = () => {
		window.scrollY >= 100 ? setOnScroll(true) : setOnScroll(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, true);

		window.addEventListener("scroll", (_) => handleScroll, true);
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.6,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && onScroll) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, [onScroll]);

	return (
		<header className="w-full fixed top-0 left-0 z-[100]">
			<div className="w-full max-w-7xl lg:px-10 mx-auto lg:py-3">
				<div
					className={cn(
						"py-2 flex items-center justify-between",
						onScroll &&
							"border-b lg:border border-zinc-600 bg-zinc-900/70 backdrop-blur-sm px-5 py-4 lg:py-2 lg:pr-2 lg:pl-6 lg:rounded-full"
					)}
				>
					<div className="flex items-center gap-5">
						<Link
							href={"/"}
							className="font-bold text-2xl"
						>
							Zenith <span className="text-primary-100">Labs</span>
						</Link>
						<div className="hidden lg:block h-7 w-px bg-zinc-400" />
						<nav className="hidden lg:flex items-center gap-5 text-zinc-300">
							{links.map((link) => {
								const sectionName = link.href.replace(/^#/, "");
								return (
									<Link
										key={link.id}
										href={link.href}
										className="group"
									>
										<div className="relative">
											<span
												className={cn(
													"text-lg text-zinc-300 group-hover:text-white duration-200",
													activeSection === sectionName &&
														onScroll &&
														"text-white"
												)}
											>
												{link.label}
											</span>
											<div className="absolute h-[65px] w-[100px] overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
												<div
													className={cn(
														"absolute w-full left-0 -bottom-[12px] shadow-link h-[20px] duration-200 opacity-0",
														activeSection === sectionName &&
															onScroll &&
															"opacity-80"
													)}
												></div>
											</div>
										</div>
									</Link>
								);
							})}
						</nav>
					</div>
					<ShimmerButton className="hidden lg:flex h-12">
						Fale Conosco
					</ShimmerButton>
				</div>
			</div>
		</header>
	);
};

