import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Padel Nuestros",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="flex flex-col items-center justify-between border-b border-gray-800 p-4 sm:flex-row">
          <Link className="cursor-pointer text-xl font-bold leading-[4rem]" href="/">
            Liga Bialet Masse
          </Link>
          <nav>
            <ul className="flex gap-4 opacity-70">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/jugadores">Jugadores</Link>
              </li>
              {/* <li>
                <Link href="/calendario">Calendario</Link>
              </li>
              <li>
                <Link href="/general">Tabla General</Link>
              </li> */}
            </ul>
          </nav>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Padel Nosotros
        </footer>
      </body>
    </html>
  );
}
