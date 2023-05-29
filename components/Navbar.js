import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full ">
      <div className="flex h-8 w-full items-center justify-center bg-lime-400 text-sm uppercase text-black">
        <p>Open and Available for Works + Collaborations</p>
      </div>
      <div className="cntnr global-grid gap-4 py-6">
        <div className="lg:col-span-5">
          <Link href="/" className="leading-[.1rem]">
            <span className="font-semibold">Peter De Guzman</span>
            <br />/ Digital Designer
          </Link>
        </div>
        <div className="flex justify-between lg:col-span-3">
          <p>Works</p>
          <p>About</p>
          <p>Connect</p>
        </div>
      </div>
    </nav>
  );
}
