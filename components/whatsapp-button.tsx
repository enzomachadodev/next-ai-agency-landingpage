import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data";

export const WhatsappButton = () => {
	return (
		<Link
			href={socials.whatsapp.link}
			className="fixed z-50 bottom-4 right-4 lg:bottom-10 lg:right-10 lg:animate-bounce"
		>
			<Image
				alt="Whatsapp button"
				src={"/images/whatsapp.png"}
				width={50}
				height={50}
			/>
		</Link>
	);
};

