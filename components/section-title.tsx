import React from "react";
import { IconType } from "react-icons";

type SectionTitleProps = {
	Icon: IconType;
	title: string;
	subtitle: string;
};

export const SectionTitle = ({ Icon, title, subtitle }: SectionTitleProps) => {
	return (
		<div className="w-full flex flex-col items-center gap-5 mb-16">
			<div className="flex items-center gap-1 border rounded-full px-3 py-1 border-yellow-300/80 bg-yellow-600/5">
				<Icon size={20} /> <span className="font-light">{subtitle}</span>
			</div>
			<h2 className="heading">{title}</h2>
		</div>
	);
};

