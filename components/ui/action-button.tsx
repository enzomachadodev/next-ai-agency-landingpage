import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { ShimmerButton } from "./shimmer-button";

type ActionButtonProps = {
	label: string;
};

export const ActionButton = ({ label }: ActionButtonProps) => {
	return (
		<ShimmerButton className="px-10 group mt-10 mx-auto">
			<span>{label}</span>
			<FiArrowRight
				size={25}
				className="ml-2 group-hover:-rotate-45 duration-200"
			/>
		</ShimmerButton>
	);
};

