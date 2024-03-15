import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import HomepageNav from "./components/Header/HomepageNav";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "GiveDo Duplica",
  description: "Duplica website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#E7424b"></meta>
      <body className={poppins.className}>
        <div className="">
          <div className="">
            {children}
          </div>
          <div>
          </div>
        </div>
      </body>
    </html>
  );
}
