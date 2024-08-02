import { Inter } from "next/font/google";

import { Footer } from "@/components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
