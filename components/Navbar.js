import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="cntnr flex justify-between gap-4">
			<div className="flex-1">
				<Link href="/" className="leading-[.1rem]">
					Peter
					<br />
					De Guzman
				</Link>
			</div>
			<div className="flex flex-col items-end flex-1">
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</nav>
	);
}
