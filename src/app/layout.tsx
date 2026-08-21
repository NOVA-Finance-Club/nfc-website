import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionRoot } from "@/components/motion-primitives";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova Finance Club (NFC) — FCT-NOVA",
    template: "%s — Nova Finance Club",
  },
  description:
    "Nova Finance Club (NFC) is a student-run finance club at FCT-NOVA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionRoot>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionRoot>
      </body>
    </html>
  );
}
