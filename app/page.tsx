import { BenefitsSection } from "@/components/benefits-section";
import { CallSection } from "@/components/call-section";
import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StrategySection } from "@/components/strategy-section";

export default function Home() {
	return (
		<main className="w-full">
			<HeroSection />
			<ServicesSection />
			<BenefitsSection />
			<StrategySection />
			<FAQSection />
			<CallSection />
		</main>
	);
}

