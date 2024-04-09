"use client";

import { motion } from "framer-motion";

const Badge = ({
	imgUrl,
	title,
	animated,
}: {
	imgUrl: string;
	title: string;
	animated?: boolean;
}) => {
	return animated ? (
		<motion.div
			transition={{
				stiffness: 1000,
				duration: 0.1,
			}}
			whileHover={{ translateY: -3 }}
			className="flex justify-center items-center w-fit gap-2 rounded-md bg-secondary p-2 dark:bg-secondary-dark dark:text-text-primary-dark select-none"
		>
			{imgUrl && (
				<img className="w-5 h-5" src={imgUrl} alt={title} title={title} />
			)}
			{title}
		</motion.div>
	) : (
		<div className="flex justify-center items-center w-fit gap-2 rounded-md bg-secondary p-2 dark:bg-secondary-dark dark:text-text-primary-dark select-none">
			{imgUrl && (
				<img className="w-5 h-5" src={imgUrl} alt={title} title={title} />
			)}
			{title}
		</div>
	);
};

export default Badge;
