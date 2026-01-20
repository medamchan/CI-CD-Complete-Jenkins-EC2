import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Simple Next.js App",
  description: "Beginner friendly Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
