type Props = Readonly<{
	children: React.ReactNode;
}>;

const Container = ({ children }: Props) => {
	return (
		<main className="flex flex-col container justify-center min-h-[calc(100vh-256px)] mt-24 mb-16 px-4 gap-20">
			{children}
		</main>
	);
};

export default Container;
