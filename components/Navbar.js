import Link from 'next/link';
import Menu from './Menu';

export default function Navbar() {
	return (
		<nav className="sticky top-[-2rem] z-40 w-full">
			<div className="flex h-8 w-full items-center justify-center bg-lime-400 text-xs uppercase tracking-widest text-black">
				<p>Open and Available for Works + Collaborations</p>
			</div>
			<div className="cntnr global-grid items-center gap-4 py-6 text-sm  backdrop-blur-sm md:text-base">
				<div className="md:col-span-2 lg:col-span-5">
					<Link href="/" className="leading-[.1rem]">
						<span className="font-semibold">Peter De Guzman</span>
						<br />/ Digital Designer
					</Link>
				</div>
				<div className="flex justify-end md:col-span-2 lg:hidden">
					<Menu />
				</div>
				<div className="col-span-1 hidden justify-between md:col-span-2 lg:col-span-3 lg:flex">
					<p>Works</p>
					<p>About</p>
					<p>Connect</p>
				</div>
			</div>
		</nav>
	);
}
