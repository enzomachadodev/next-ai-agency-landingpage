import { BsBarChart } from "react-icons/bs";
import {
	PiCalendarCheck,
	PiChartLineDown,
	PiCpuLight,
	PiDeviceMobileLight,
	PiGear,
	PiGithubLogoLight,
	PiGlobeLight,
	PiInstagramLogoLight,
	PiLightbulb,
	PiRobotThin,
	PiTarget,
	PiWhatsappLogoLight,
} from "react-icons/pi";

export const links = [
	{
		id: 1,
		label: "Início",
		href: "#home",
	},
	{
		id: 2,
		label: "Serviços",
		href: "#services",
	},
	{
		id: 3,
		label: "Benefícios",
		href: "#benefits",
	},
	{
		id: 4,
		label: "Estratégia",
		href: "#strategy",
	},
	{
		id: 5,
		label: "FAQ",
		href: "#faq",
	},
];

export const services = [
	{
		id: 1,
		title: "Desenvolvimento de Aplicativos",
		description:
			"Tenha um aplicativo inovador e personalizado que impulsione o engajamento e a eficiência, adaptado às necessidades exclusivas do seu negócio.",
		icon: PiDeviceMobileLight,
	},
	{
		id: 2,
		title: "Criação de Sites",
		description:
			"Construa uma presença online impactante e profissional. Desenvolvemos sites que não apenas atraem visitantes, mas também convertem leads em clientes fiéis.",
		icon: PiGlobeLight,
	},
	{
		id: 3,
		title: "Automação com IA",
		description:
			"Transforme suas operações com soluções de automação inteligentes, otimizando processos, reduzindo custos e elevando a produtividade.",
		icon: PiCpuLight,
	},
];

export const benefits = [
	{
		id: 1,
		title: "Melhoria de Eficiência",
		description:
			"Simplifique suas operações comerciais e fluxos de trabalho com soluções de automação de IA.",
		icon: PiCalendarCheck,
	},
	{
		id: 2,
		title: "Redução de Custos",
		description:
			"Reduza os custos operacionais automatizando tarefas repetitivas e otimizando a alocação de recursos.",
		icon: PiChartLineDown,
	},
	{
		id: 3,
		title: "Costumização",
		description:
			"Adapte as soluções de automação de IA às necessidades e objetivos específicos do seu negócio.",
		icon: PiGear,
	},
	{
		id: 4,
		title: "Escalabilidade",
		description:
			"Expanda suas operações com a automação de IA que se ajusta às crescentes demandas do seu negócio.",
		icon: BsBarChart,
	},
	{
		id: 5,
		title: "Precisão Aprimorada",
		description:
			"Aumente a precisão e reduza erros na tomada de decisões com soluções orientadas por IA.",
		icon: PiTarget,
	},
	{
		id: 6,
		title: "Insights de Dados",
		description:
			"Extraia insights valiosos dos seus dados para decisões e planejamento estratégico embasados.",
		icon: PiLightbulb,
	},
];

export const strategy = [
	{
		id: 1,
		title: "Análise e Planejamento",
		description:
			"Iniciamos com uma análise detalhada de suas necessidades e objetivos, desenvolvendo uma estratégia personalizada para maximizar o impacto da IA em seu negócio.",
	},
	{
		id: 2,
		title: "Desenvolvimento e Implementação",
		description:
			"Com a estratégia definida, passamos para a fase de desenvolvimento, criando e implementando soluções sob medida com tecnologias de ponta para garantir eficiência e eficácia.",
	},
	{
		id: 3,
		title: "Monitoramento e Otimização",
		description:
			"Após a implementação, continuamos a monitorar e ajustar nossas soluções, garantindo que sua empresa obtenha o máximo benefício e permaneça à frente da concorrência.",
	},
];

export const faq = [
	{
		id: 1,
		question:
			"Quais setores podem se beneficiar das soluções de automação com Inteligência Artificial?",
		response:
			"Nossas soluções de automação com IA beneficiam diversos setores, incluindo saúde, finanças, varejo, manufatura e transporte. Empresas que lidam com tarefas repetitivas, processamento de dados, interações com clientes ou fluxos de trabalho operacionais podem aumentar significativamente a eficiência e a produtividade utilizando a automação de IA.",
	},
	{
		id: 2,
		question:
			"Como as automações com IA diferem dos métodos de automação tradicionais?",
		response:
			"A automação tradicional baseia-se em sistemas de regras fixas, enquanto nossa automação com IA utiliza aprendizado de máquina e processamento de linguagem natural para executar tarefas de forma inteligente e adaptável. Isso resulta em soluções mais flexíveis e escaláveis, capazes de lidar com dados complexos e não estruturados.",
	},
	{
		id: 3,
		question: "Quais são alguns casos de uso comuns para automação de IA?",
		response:
			"Nossa automação de IA é aplicada em diversas áreas, como chatbots para atendimento ao cliente, processamento e extração de documentos, previsão de demanda, otimização de estoque, manutenção preditiva, detecção de fraudes e personalização de campanhas de marketing.",
	},
	{
		id: 4,
		question: "Como a automação de IA pode melhorar os processos de negócios?",
		response:
			"A automação com IA otimiza os processos de negócios ao simplificar fluxos de trabalho, reduzir o esforço manual e erros, aumentar a produtividade e eficiência, melhorar a experiência do cliente, otimizar a alocação de recursos e possibilitar decisões baseadas em dados precisos.",
	},
	{
		id: 5,
		question: "Quão seguras são as soluções de automação com IA?",
		response:
			"Na Zenith Labs, a segurança é nossa prioridade. Implementamos criptografia, controles de acesso, anonimização de dados e auditorias regulares de segurança para garantir a confidencialidade, integridade e disponibilidade dos dados processados por nossas soluções de automação com IA.",
	},
];

export const socials = {
	phone: {
		link: "tel:+5531998505936",
		label: "+55 (31) 99850-5936",
	},
	email: {
		link: "mailto:enzomachadodev@gmail.com",
		label: "enzomachadodev@gmail.com",
	},
	instagram: {
		link: "/",
		icon: PiInstagramLogoLight,
	},
	whatsapp: {
		link: "https://api.whatsapp.com/send?phone=5531998505936&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20de%20tecnologia%20da%20sua%20empresa.",
		icon: PiWhatsappLogoLight,
	},
	github: {
		link: "https://github.com/enzomachadodev",
		icon: PiGithubLogoLight,
	},
};

