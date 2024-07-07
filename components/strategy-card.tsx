import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { MovingBorderButton } from "./ui/moving-border";
import { ShimmerButton } from "./ui/shimmer-button";

type StrategyCardProps = {
	title: string;
	description: string;
	preview: string;
};

export const StrategyCard = ({
	title,
	description,
	preview,
}: StrategyCardProps) => {
	const [hovered, setHovered] = useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border border-zinc-600 group/canvas-card flex items-center justify-center col-span-2 max-w-sm w-full mx-auto p-4 relative h-[30rem] rounded-3xl"
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-yellow-600 rounded-3xl overflow-hidden"
							colors={[[254, 243, 199]]}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20 px-10">
				<div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
					<ShimmerButton className="w-full">{preview}</ShimmerButton>
				</div>
				<h2
					// change text-3xl, add text-center
					className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
				>
					{title}
				</h2>
				{/* add this one for the description */}
				<p
					className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
					style={{ color: "#fff" }}
				>
					{description}
				</p>
			</div>
		</div>
	);
};

