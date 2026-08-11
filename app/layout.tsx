import type { Metadata } from "next";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const title = "CF Lawn Services | Lawn Care & Landscaping in Lake Dallas, TX";
const description = "CF Lawn Services provides reliable lawn care and landscaping services in Lake Dallas and surrounding Lake Cities. Call 940-453-2471 for a quote.";

export const metadata: Metadata = { metadataBase: new URL("https://cflawnservices.com"), title, description, icons: { icon: "/images/logo.jpg" }, openGraph: { title, description, type: "website", locale: "en_US", url: "https://cflawnservices.com", siteName: "CF Lawn Services", images: [{ url: "/images/lawn-wide.png", width: 1200, height: 630, alt: "Freshly maintained lawn in Lake Dallas" }] }, twitter: { card: "summary_large_image", title, description } };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<SiteFooter /></body></html>;
}
