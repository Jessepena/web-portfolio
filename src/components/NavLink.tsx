"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: any) {
	const pathname = usePathname();
	const isActive = pathname === href || pathname.startsWith(`${href}/`);

	return (
		<Link href={href} className={`${isActive ? "text-primary" : ""}`}>
			<motion.div
				transition={{
					stiffness: 1000,
					duration: 0.1,
				}}
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.99 }}
			>
				{children}
			</motion.div>
		</Link>
	);
}
