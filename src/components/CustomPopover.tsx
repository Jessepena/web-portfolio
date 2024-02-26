"use client";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { Transition } from "@headlessui/react";

function CustomPopover() {
	const links = [
		{
			label: "Home",
			route: "/",
		},
		{
			label: "About",
			route: "/about",
		},
		{
			label: "Projects",
			route: "/projects",
		},
	];

	return (
		<Popover>
			<Popover.Overlay className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-60" />

			<Popover.Button className="flex items-center focus:outline-none">
				<BsList
					size={24}
					className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
				/>
			</Popover.Button>
			<Transition
				className="absolute z-10 inset-x-8 top-8"
				enter="transition duration-300 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-300 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Popover.Panel className="absolute z-10 inset-x-8 top-8 rounded-lg bg-background dark:bg-background-dark divide-y-2 divide-gray-200 dark:divide-gray-700">
					<div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-200 dark:border-gray-700 ">
						<h1 className="font-bold">Navigation</h1>
						<Popover.Button className="flex items-center focus:outline-none">
							<TfiClose
								size={24}
								className="cursor-pointer fill-background-dark dark:fill-background hover:fill-primary"
							/>
						</Popover.Button>
					</div>
					{links.map((link) => (
						<Popover.Button
							as={Link}
							key={link.label}
							href={link.route}
							className="block px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							{link.label}
						</Popover.Button>
					))}
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

export default CustomPopover;
