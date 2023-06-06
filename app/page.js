import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<section className="flex  flex-col gap-12 pt-16">
				{/* <div className="cntnr">
					<div className="flex justify-center gap-2 lg:gap-4">
						<LogoLetter letter="P" />
						<LogoLetter letter="D" />
						<LogoLetter letter="G" />
					</div>
				</div> */}
				<div className="cntnr">
					<h1>
						Portfolio of Peter de Guzman.&#160;
						<br className="hidden md:block"></br>
						Digital Designer specializing in strategic design.
					</h1>
				</div>
				<div className="global-grid cntnr text-sm">
					<div className="col-span-1 md:col-span-2 lg:col-span-5">
						<p>Based in Chicago, IL.</p>
					</div>
					<div className="col-span-1 text-right md:col-span-2 lg:col-span-3">
						2020 - 2023
					</div>
				</div>
			</section>
			<section className="h-screen">
				<h2 className="cntnr">Process</h2>
				<div className="bt-white">
					<h3 className="cntnr">Research</h3>
				</div>
			</section>
		</main>
	);
}

// function LogoLetter({ letter }) {
// 	return (
// 		<div className="flex aspect-square h-20 items-center justify-center rounded-full border-4 border-white md:h-28 lg:h-40">
// 			<p className="text-3xl lg:text-6xl">{letter}</p>
// 		</div>
// 	);
// }
