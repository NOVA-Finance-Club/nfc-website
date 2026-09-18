import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionRoot } from "@/components/motion-primitives";
import { LanguageProvider } from "@/lib/language";

// The whole site uses Libre Baskerville — no separate body/sans font. See
// globals.css, where --font-sans is aliased to this same --font-heading
// variable rather than loading a second typeface.
const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova Finance Club (NFC) — NOVA FCT",
    template: "%s — Nova Finance Club",
  },
  description:
    "Nova Finance Club (NFC) is a student-run finance club at NOVA FCT.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <MotionRoot>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </MotionRoot>
        </LanguageProvider>
      </body>
    </html>
  );
}
