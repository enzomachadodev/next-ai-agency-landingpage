import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { ShimmerButton } from "./ui/shimmer-button";

export const HeroSection = () => {
	return (
		<section
			id="home"
			className="w-full relative lg:bg-hero-pattern bg-contain bg-center"
		>
			<div className="relative top-0 left-0 bottom-0 right-0 pt-40 pb-28 bg-hero-gradient bg-cover bg-center">
				<div className="wrapper flex flex-col items-center justify-between gap-10 lg:flex-row">
					<div className="w-full flex flex-col items-start max-w-[550px] gap-8">
						<span className="text-zinc-400 font-medium text-xs lg:text-base tracking-[0.3rem] uppercase">
							Transforme sua empresa
						</span>
						<h1 className="text-[2.8rem] leading-[1.1] lg:text-7xl lg:leading-[1.1] font-semibold">
							A Revolução da Inteligência Artificial ao Seu Alcance
						</h1>
						<p className="font-medium text-zinc-400 max-w-[400px] lg:text-lg">
							Automatize, inove e lidere. Transforme o futuro da sua empresa com
							nossas soluções digitais.
						</p>
						<ShimmerButton className="px-10 group">
							<span>Agendar uma Reunião</span>
							<FiArrowRight
								size={25}
								className="ml-2 group-hover:-rotate-45 duration-200"
							/>
						</ShimmerButton>
					</div>

					<Image
						src="/images/hero.png"
						alt="cubic image"
						width={500}
						height={500}
						className="w-full h-full -ml-5 max-w-[500px]"
						priority
					/>
				</div>
			</div>
		</section>
	);
};

