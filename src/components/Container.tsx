type Props = Readonly<{
	children: React.ReactNode;
}>;

const Container = ({ children }: Props) => {
	return (
		<main className="container min-h-[calc(100vh-128px)] mt-16 px-8">
			{children}
		</main>
	);
};

export default Container;
