type Props = Readonly<{
	children: React.ReactNode;
}>;

const Container = ({ children }: Props) => {
	return <main className="container h-svh mt-20 px-8">{children}</main>;
};

export default Container;
