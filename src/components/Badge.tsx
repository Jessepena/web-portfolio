const Badge = ({ imgUrl, title }: { imgUrl: string; title: string }) => {
	return (
		<div className="flex justify-center items-center w-fit gap-2 rounded-md bg-secondary p-2 dark:bg-secondary-dark dark:text-text-primary-dark">
			<img className="w-5 h-5" src={imgUrl} alt={title} title={title} />
			{title}
		</div>
	);
};

export default Badge;
