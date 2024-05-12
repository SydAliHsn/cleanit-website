import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AnimatePageTransition from "@/components/AnimatePageTransition";

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900'] });

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
      <body className={roboto.className}>
        <AnimatePageTransition> {/* Comment this when in development */}

          <Header />
          {children}
          <Footer />

        </AnimatePageTransition> {/* Comment this when in development */}
      </body>
    </html>
  );
}
