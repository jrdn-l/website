'use client'
import Link, { LinkProps } from "next/link";
import { HTMLProps, MouseEvent, FC } from "react";


export const CustomLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({ href, children, scroll,  ...rest }) => {
	const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (href.startsWith("#")) {
			event.preventDefault();
			const destination = document.getElementById(href.substring(1));
			if (destination) destination.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<Link href={href} legacyBehavior={true} scroll={scroll}>
			<a href={href} {...rest} onClick={onClick}>
				{children}
			</a>
		</Link>
	);
};