"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

const ScrollElement = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={clsx(
				"flex flex-col justify-center items-center transition-opacity duration-1000",
				scrollPosition === 0 ? "opacity-100" : "opacity-0"
			)}
		>
			<p
				className={clsx(
					"text-black text-lg mb-px animate-pulse",
					"lg:text-xl lg:text-white"
				)}
			>
				SCROLL
			</p>
			<div
				className={clsx("h-10 w-px bg-black", "lg:bg-white lg:h-36")}
			/>
		</div>
	);
};

export default ScrollElement;
