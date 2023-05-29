'use client';
import { createContext } from 'react';

const Context = createContext();

import { AnimatePresence } from 'framer-motion';

export default function Menu() {
	return (
		<div>
			<button>MENU</button>
			<AnimatePresence>
				<MenuWindow />
			</AnimatePresence>
		</div>
	);
}

function MenuWindow() {
	return (
		<div className="fixed left-0 top-0 z-50 h-screen w-full bg-orange-200">
			<div className="flex flex-col gap-4">
				<p>Works</p>
				<p>About</p>
				<p>Connect</p>
			</div>
		</div>
	);
}
