import React from "react";
import { SectionTitle } from "./section-title";
import { PiQuestionThin } from "react-icons/pi";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { faq } from "@/data";

export const FAQSection = () => {
	return (
		<section
			id="faq"
			className="w-full py-20"
		>
			<div className="wrapper">
				<SectionTitle
					Icon={PiQuestionThin}
					subtitle="FAQ"
					title="Perguntas Frequentes"
				/>
				<Accordion
					type="single"
					collapsible
					className="w-full border border-yellow-400/60 px-8  rounded-3xl"
				>
					{faq.map((card, index) => (
						<AccordionItem
							key={card.id}
							value={`item-${card.id}`}
						>
							<AccordionTrigger className="text-start">
								{card.question}
							</AccordionTrigger>
							<AccordionContent>{card.response}</AccordionContent>
							{index < faq.length - 1 && (
								<div className="absolute inset-x-0 h-px w-full mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
							)}
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

