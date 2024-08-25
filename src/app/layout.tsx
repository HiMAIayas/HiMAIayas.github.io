import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SectionContextProvider from "./contexts/SectionContext";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phumipas Namjaidee",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionContextProvider>
        <div className="w-full bg-slate-50">
          {children}
        </div>
        <Footer></Footer>
        </SectionContextProvider>
      </body>
    </html>
  );
}
