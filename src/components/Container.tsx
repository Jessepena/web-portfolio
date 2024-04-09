type Props = Readonly<{
	children: React.ReactNode;
}>;

const Container = ({ children }: Props) => {
	return (
		<main className="flex flex-col container min-h-[calc(100vh-128px)] mt-24 mb-16 px-4 gap-20">
			{children}
		</main>
	);
};

export default Container;
