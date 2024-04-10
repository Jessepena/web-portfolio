"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { experienceList } from "@/data/experiences";

const Experience = () => {
	const [selectedExperience, setSelectedExperience] = useState(
		experienceList[0]
	);

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold w-fit flex flex-col items-center">
				My Experience
				<span className="bg-primary block w-full h-2 rounded-md animate-underline mt-1" />
			</h1>

			<div className="flex flex-col md:flex-row gap-4 ">
				<div className="flex md:flex-col md:w-[50%] items-center md:items-start flex-wrap gap-1">
					{experienceList.map((experience) => (
						<div
							key={experience.name}
							className={`${
								selectedExperience.name === experience.name &&
								"bg-secondary dark:bg-secondary-dark"
							} flex justify-center md:justify-start p-5 items-center w-[96px] md:w-[85%] h-[96px] gap-2 md:w-[90%] rounded-md hover:bg-secondary dark:hover:bg-secondary-dark cursor-pointer ease-out duration-300`}
							onClick={() => setSelectedExperience(experience)}
						>
							<Image
								width={36}
								height={36}
								src={experience.imgUrl}
								alt={experience.name}
							/>
							<span className="hidden md:block">{experience.name}</span>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-4 md:w-[50%]">
					<span>
						{selectedExperience.position} at
						<Link
							href={selectedExperience.url}
							target="_blank"
							className="text-link"
						>
							{" @"}
							{selectedExperience.name}
						</Link>
						<p className="text-date">{selectedExperience.date}</p>
					</span>
					<ul className="list-none ">
						{selectedExperience.responsibilities.map((responsibility) => (
							<li key={responsibility} className="flex">
								<svg
									className="w-4 h-4 mt-1 mr-2 -ml-1 text-link flex-shrink-0"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
								{responsibility}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
