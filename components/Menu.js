'use client';
import { createContext, useContext } from 'react';

const Context = createContext({}, () => {
	throw new Error('Context must be used within a Provider');
});
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { m } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const window = useContext(Context);

	return (
		<>
			<Context.Provider value={{ isOpen, setIsOpen }}>
				<div>
					<button onClick={() => setIsOpen(!isOpen)}>MENU</button>
				</div>
				<AnimatePresence>
					{isOpen && <MenuWindow key="menu-window" />}
				</AnimatePresence>
			</Context.Provider>
		</>
	);
}

function MenuWindow() {
	const { isOpen, setIsOpen } = useContext(Context);
	useLockBodyScroll();

	return (
		<m.div className="cntnr fixed left-0 top-[-2rem] z-50 h-screen w-full bg-green-500">
			<div className="flex flex-col gap-4">
				<p onClick={() => setIsOpen(false)}>Works</p>
				<p>About</p>
				<p>Connect</p>
			</div>
		</m.div>
	);
}
