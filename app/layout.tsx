import { Inter } from "next/font/google";

import { auth } from "@/auth";
import { Footer, Navigation } from "@/components";
import { UserProfile } from "@/types/UserProfile";
import { GoogleTagManager } from "@next/third-parties/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user || {};

  return (
    <html lang="en" className={inter.className}>
      <GoogleTagManager gtmId="GTM-NQKJN7JH" />
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navigation user={user as UserProfile} />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
