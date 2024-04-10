"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Badge = ({
	imgUrl,
	title,
	url,
	animated,
}: {
	imgUrl: string;
	title: string;
	url?: string;
	animated?: boolean;
}) => {
	return animated ? (
		<motion.a
			transition={{
				stiffness: 1000,
				duration: 0.1,
			}}
			href={url}
			target="_blank"
			whileHover={{ translateY: -3 }}
			className="flex justify-center items-center w-fit gap-2 rounded-md bg-secondary p-2 dark:bg-secondary-dark dark:text-text-primary-dark select-none cursor-pointer transition-colors ease-out duration-300"
		>
			{imgUrl && (
				<Image
					width={20}
					height={20}
					className="w-5 h-5"
					src={imgUrl}
					alt={title}
					title={title}
				/>
			)}
			{title}
		</motion.a>
	) : (
		<a
			href={url}
			target="_blank"
			className="flex justify-center items-center w-fit gap-2 rounded-md bg-secondary p-2 dark:bg-secondary-dark dark:text-text-primary-dark select-none"
		>
			{imgUrl && (
				<Image
					width={20}
					height={20}
					className="w-5 h-5"
					src={imgUrl}
					alt={title}
					title={title}
				/>
			)}
			{title}
		</a>
	);
};

export default Badge;
