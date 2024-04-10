"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const CustomButton = () => {
	return (
		<motion.button
			transition={{
				stiffness: 1000,
				duration: 0.1,
			}}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.99 }}
			className="hidden md:flex items-center rounded-md px-5 py-3 bg-primary text-background text-xs"
		>
			<Link className="flex items-center gap-2" href="/contact">
				Contact me <FaArrowRight className="animate-bounce-right" />
			</Link>
		</motion.button>
	);
};

export default CustomButton;
