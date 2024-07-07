import React from "react";
import { services } from "@/data";
import { ServiceCard } from "./service-card";
import { SectionTitle } from "./section-title";
import { PiSparkleLight } from "react-icons/pi";
import { ActionButton } from "./ui/action-button";

export const ServicesSection = () => {
	return (
		<section
			id="services"
			className="w-full py-20"
		>
			<div className="wrapper ">
				<SectionTitle
					Icon={PiSparkleLight}
					title="Transformando sua Empresa com I.A."
					subtitle="Serviços"
				/>
				<div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-10">
					{services.map((card, index) => (
						<ServiceCard
							key={index}
							Icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
				<ActionButton label="Fale com um Especialista" />
			</div>
		</section>
	);
};

