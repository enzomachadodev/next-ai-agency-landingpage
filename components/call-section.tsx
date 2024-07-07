import React from "react";
import { ActionButton } from "./ui/action-button";

export const CallSection = () => {
	return (
		<section className="w-full bg-footer-gradient bg-center bg-cover">
			<div className="wrapper relative overflow-hidden py-32">
				<h2 className="text-4xl  lg:text-[5.8rem] lg:leading-[1.1] font-semibold text-center mb-10">
					Preparado para Levar sua Empresa ao Próximo Nível?
				</h2>
				<p className="text-lg text-center">
					Entre em contato hoje e descubra como podemos ajudá-lo a atingir seus
					objetivos.
				</p>
				<ActionButton label="Entrar em Contato Agora" />
			</div>
		</section>
	);
};

