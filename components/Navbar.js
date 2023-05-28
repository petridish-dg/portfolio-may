import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="cntnr grid grid-cols-8 gap-4 fixed top-0 w-full">
			<div className="col-span-5">
				<Link href="/" className="leading-[.1rem]">
					<span className="font-semibold">Peter De Guzman</span>
					<br />/ Digital Designer
				</Link>
			</div>
			<div className="col-span-3 flex justify-between">
				<p>Works</p>
				<p>About</p>
				<p>Connect</p>
			</div>
		</nav>
	);
}
