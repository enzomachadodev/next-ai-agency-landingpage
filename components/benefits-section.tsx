import React from "react";
import { SectionTitle } from "./section-title";
import { benefits } from "@/data";
import { PiSquaresFourLight } from "react-icons/pi";
import { ActionButton } from "./ui/action-button";

export const BenefitsSection = () => {
	return (
		<section
			id="benefits"
			className="w-full py-20"
		>
			<div className="wrapper">
				<SectionTitle
					Icon={PiSquaresFourLight}
					subtitle="Benefícios"
					title="Por que Utilizar IA na sua Empresa?"
				/>
				<div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-10">
					{benefits.map((card, index) => (
						<div
							key={card.id}
							className="col-span-2 flex flex-col gap-4"
						>
							<div className="p-2 rounded-lg w-fit aspect-square border border-zinc-600 text-yellow-300">
								<card.icon size={32} />
							</div>
							<h4 className="font-semibold text-2xl">{card.title}</h4>
							<p>{card.description}</p>
						</div>
					))}
				</div>
				<ActionButton label="Quero Saber Mais" />
			</div>
		</section>
	);
};

