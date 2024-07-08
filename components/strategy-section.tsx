"use client";

import React from "react";
import { SectionTitle } from "./section-title";
import { PiLightningLight } from "react-icons/pi";
import { strategy } from "@/data";
import { StrategyCard } from "./strategy-card";
import { ActionButton } from "./ui/action-button";

export const StrategySection = () => {
	return (
		<section
			id="strategy"
			className="w-full py-20"
		>
			<div className="wrapper">
				<SectionTitle
					Icon={PiLightningLight}
					subtitle="Estratégia"
					title="Processo Simples e Eficiente"
				/>
				<div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-10">
					{strategy.map((card) => (
						<StrategyCard
							key={card.id}
							title={card.title}
							preview={`Fase ${card.id}`}
							description={card.description}
						/>
					))}
				</div>
				<ActionButton label="Fazer uma Análise" />
			</div>
		</section>
	);
};

