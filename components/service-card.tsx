import { IconType } from "react-icons";

type ServiceCardProps = {
	Icon: IconType;
	title: string;
	description: string;
};

export const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
	return (
		<div className="relative w-full col-span-2 border border-zinc-600 rounded-3xl p-10 flex flex-col gap-8">
			<div className="absolute inset-x-0 h-[2px] w-[90%] mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
			<div className="flex items-center gap-4">
				<div className="p-3 border border-zinc-600 rounded-xl text-primary-200 bg-primary-100/5">
					<Icon size={38} />
				</div>
				<h3 className="font-medium text-xl">{title}</h3>
			</div>
			<div className="w-full h-px bg-zinc-600" />
			<p>{description}</p>
		</div>
	);
};

