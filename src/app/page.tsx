import Container from "@/components/Container";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<Container>
			<div className="text-3xl font-bold bg-primary">
				<Hero />
			</div>
		</Container>
	);
}
