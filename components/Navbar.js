'use client';
import { createContext, useContext, useEffect } from 'react';
const Context = createContext({}, () => {
	throw new Error('Context must be used within a Provider');
});
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Context.Provider value={{ isOpen, setIsOpen }}>
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
						<div>
							<button onClick={() => setIsOpen(!isOpen)}>MENU</button>
						</div>
					</div>
					<div className="col-span-1 hidden justify-between md:col-span-2 lg:col-span-3 lg:flex">
						<p>Works</p>
						<p>About</p>
						<p>Connect</p>
					</div>
				</div>
			</nav>
			<AnimatePresence>{isOpen && <MenuWindow />}</AnimatePresence>
		</Context.Provider>
	);
}

function MenuWindow() {
	const { isOpen, setIsOpen } = useContext(Context);
	useLockBodyScroll(isOpen);

	const windowVariants = {
		hidden: {
			x: '100%',
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
		open: {
			x: 0,
			transition: {
				duration: 0.3,
				ease: 'easeIn',
			},
		},
	};

	return (
		<motion.nav
			className="cntnr fixed left-0 top-0 z-50 h-screen w-full bg-black"
			variants={windowVariants}
			initial="hidden"
			animate="open"
			exit="hidden">
			<div className="flex flex-col gap-4">
				<button onClick={() => setIsOpen(false)}>Works</button>
				<p>About</p>
				<p>Connect</p>
			</div>
		</motion.nav>
	);
}
