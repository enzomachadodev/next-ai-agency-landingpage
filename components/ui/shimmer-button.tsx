import { cn } from "@/lib/utils";
import React from "react";

type ShimmerButtonProps = {
	children: React.ReactNode;
	className?: string;
};

export const ShimmerButton = ({ children, className }: ShimmerButtonProps) => {
	return (
		<button
			className={cn(
				"inline-flex h-14 w-full sm:w-fit animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#FEE84C,45%,#fef3c7,55%,#FEE84C)] bg-[length:200%_100%] px-6 font-semibold text-lg text-zinc-950 transition-colors focus:outline-none",
				className
			)}
		>
			{children}
		</button>
	);
};

