import React from "react";
import Link from "next/link";
import { links, socials } from "@/data";
import { PiEnvelopeSimpleLight, PiPhoneLight } from "react-icons/pi";

export const Footer = () => {
	return (
		<footer className="w-full border-t border-primary-100/40 pt-14">
			<div className="wrapper lg:flex-row lg:items-start lg:justify-between gap-8">
				<div className="flex flex-col items-center text-center lg:items-start lg:text-start gap-4">
					<Link
						href={"/"}
						className="font-bold text-3xl"
					>
						Zenith <span className="text-primary-100">Labs</span>
					</Link>
					<p className="max-w-[300px]">
						Automatize, inove e lidere. Transforme o futuro da sua empresa com
						nossas soluções digitais.
					</p>
				</div>

				<div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
					<h4 className="font-medium text-xl">Navegação</h4>
					{links.map((link) => (
						<Link
							key={link.id}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
					<h4 className="font-medium text-xl">Contato</h4>
					<div className="flex items-center gap-3">
						<PiEnvelopeSimpleLight
							size={24}
							className="text-primary-100"
						/>
						<a href="mailto:contato@zenithlabs.com">contato@zenithlabs.com</a>
					</div>
					<div className="flex items-center gap-3">
						<PiPhoneLight
							size={24}
							className="text-primary-100"
						/>
						<a href="tel:+5531998505936">{"+55 (31) 99850-5936"}</a>
					</div>
				</div>

				<div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
					<h4 className="font-medium text-xl">Nossas Redes</h4>
					<div className="flex items-center gap-4">
						<Link href={socials.instagram.link}>
							<div className="border rounded-full p-2 border-zinc-600">
								<socials.instagram.icon
									size={24}
									className="text-primary-100"
								/>
							</div>
						</Link>
						<Link href={socials.whatsapp.link}>
							<div className="border rounded-full p-2 border-zinc-600">
								<socials.whatsapp.icon
									size={24}
									className="text-primary-100"
								/>
							</div>
						</Link>
						<Link href={socials.github.link}>
							<div className="border rounded-full p-2 border-zinc-600">
								<socials.github.icon
									size={24}
									className="text-primary-100"
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full border-t border-zinc-600 mt-14 py-8">
				<div className="wrapper lg:flex-row lg:justify-between gap-8 text-zinc-400 text-sm">
					<span>© 2024 All Right Reserved by Zenith Labs</span>
					<Link href={"/privacy-policy"}>Política de Privacidade</Link>
				</div>
			</div>
		</footer>
	);
};

