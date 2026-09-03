import type { Metadata } from "next";

import { nfcFund, siteConfig } from "@/lib/site-data";
import { FundContent } from "./fund-content";

export const metadata: Metadata = {
  title: "NFC Fund",
  description: `${nfcFund.name} — ${siteConfig.name}'s virtual investment fund.`,
};

export default function FundPage() {
  return <FundContent />;
}
