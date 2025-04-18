import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoAcademy | The Sustainabilty Learning Academy",
  description: "Our mission is to create a fun and free learning space aimed at students, teaching them all about climate change and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}