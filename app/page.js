import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="pt-28">
        <div className="cntnr">
          <h1 className="text-5xl">
            Portfolio of Peter de Guzman.
            <br />
            Digital Designer specializing in strategic design.
          </h1>
        </div>
        <div className="global-grid cntnr">
          <div className="col-span-5">
            <p>Chicago, IL</p>
          </div>
          <div className="col-span-3 text-right">2020 - 2023</div>
        </div>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
