import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AnimatePageTransition from "@/components/AnimatePageTransition";
import 'react-infinite-calendar/styles.css';
import 'react-responsive-modal/styles.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "CleanIt Qatar",
  description: "CleanIt Qatar is a cleaning service company in Qatar. We provide cleaning services for residential and commercial properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AnimatePageTransition>

          <Header />
          {children}
          <Footer />

        </AnimatePageTransition>
      </body>
    </html>
  );
}
