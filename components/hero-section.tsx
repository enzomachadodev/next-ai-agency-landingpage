import Image from "next/image";
import { ActionButton } from "./action-button";

export const HeroSection = () => {
	return (
		<div className="w-full relative lg:bg-hero-pattern bg-contain bg-center">
			<div className="relative top-0 left-0 bottom-0 right-0 pt-40 pb-28 bg-hero-gradient bg-cover bg-center">
				<div className="wrapper flex flex-col items-center gap-10 lg:flex-row ">
					<div className="w-full flex flex-col items-start max-w-[550px] gap-6 lg:gap-8">
						<span className="text-zinc-400 font-medium text-xs lg:text-base tracking-[0.3rem]">
							API MANAGEMENT MADE EASY
						</span>
						<h1 className="text-6xl lg:text-8xl font-semibold">
							Unmatched scale and security
						</h1>
						<p className="font-medium text-zinc-400 max-w-[400px] lg:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
							voluptatem expedita laudantium recusandae adipisci.
						</p>
						<ActionButton />
					</div>

					<Image
						src="/images/hero.png"
						alt="cubic image"
						width={1000}
						height={1000}
						className="w-full h-full -ml-4 max-w-[500px]"
					/>
				</div>
			</div>
		</div>
	);
};

