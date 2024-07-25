"use client";

import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/data";
import { cn } from "@/lib/utils";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ActionButton } from "./ui/action-button";

export const MenuMobile = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<button
				onClick={toggleMenu}
				className="relative z-[12] flex flex-col justify-center items-center lg:hidden"
			>
				<span
					className={cn(
						"bg-white block transition-all duration-300 ease-out h-[3px] w-[20px] ml-auto rounded-sm -translate-y-0.5",
						isOpen && "rotate-45 translate-y-[7px] w-[30px]"
					)}
				></span>
				<span
					className={cn(
						"bg-white block transition-all duration-300 ease-out h-[3px] w-[30px] rounded-sm my-1 ",
						isOpen && "opacity-0"
					)}
				></span>
				<span
					className={cn(
						"bg-white block transition-all duration-300 ease-out h-[3px] w-[20px] mr-auto rounded-sm translate-y-0.5",
						isOpen && "-rotate-45 -translate-y-[7px] w-[30px]"
					)}
				></span>
			</button>
			<div
				className={cn(
					"absolute z-[11] h-screen w-screen top-0 right-0 translate-x-[100%] invisible pointer-events-none transition-all",
					isOpen && "translate-x-[0] visible pointer-events-auto bg-zinc-950/70"
				)}
				onClick={(e) => {
					e.stopPropagation();
					toggleMenu();
				}}
			>
				<div
					className={cn(
						"absolute z-[11] h-full w-[85%] border-l border-zinc-600 top-0 right-0 bg-zinc-950 pt-[89px] px-8 pb-8 "
					)}
				>
					<div className="flex flex-col h-full justify-between">
						<div>
							<span className="text-zinc-50 font-light text-lg">Navegação</span>
							<div className="h-[1px] w-full bg-zinc-600 mt-4" />
						</div>
						<ul className="h-full py-8 flex flex-col gap-8">
							{links.map((l, index) => (
								<li key={index}>
									<Link
										href={l.href}
										onClick={toggleMenu}
										className="w-full py-4 text-4xl"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
						<div>
							<ActionButton label="Fale conosco" />
							<div className="h-[1px] w-full bg-zinc-600 mb-4 my-8" />
							<span className="text-zinc-50 font-light text-lg">
								Nossas Redes
							</span>
							<div className="mt-4 flex items-center gap-4">
								<a
									href="https://www.instagram.com/tivo.inc/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="flex items-center gap-2">
										<FaInstagram />
										Instagram
									</div>
								</a>
								<a
									href="https://www.instagram.com/tivo.inc/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="flex items-center gap-2">
										<FaWhatsapp />
										Whatsapp
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

