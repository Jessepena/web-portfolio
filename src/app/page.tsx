import Banner from "@/components/Banner";
import Container from "@/components/Container";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
	return (
		<Container>
			<Hero />
			<div className="flex flex-col gap-20 md:px-4 xl:px-24">
				<Experience />
				{/* <Portfolio /> */}
				<Banner />
			</div>
		</Container>
	);
}
