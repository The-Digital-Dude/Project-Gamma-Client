import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import AiSupportPopup from "@/components/AiSupportPopup";
import { Toaster } from "react-hot-toast";
import { GTM } from "@/components/GTM";
import { GTMTester } from "@/components/GTM/GTMTester";
import { GTMDebug } from "@/components/GTM/GTMDebug";
import { GTMSuspenseWrapper } from "@/components/GTM/GTMSuspenseWrapper";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: {
    default: "RentalEase - Property Compliance & Management Solutions | Melbourne",
    template: `%s | RentalEase - Property Compliance Solutions`,
  },
  description: "Complete rental compliance and property management solutions for Victorian landlords and property managers. Automated compliance checks, licensed tradie network, and CRM automation for electrical, gas, and smoke alarm safety services.",
  keywords: ["property compliance Melbourne", "rental property management", "electrical safety checks", "gas safety inspections", "smoke alarm compliance", "licensed electricians Melbourne", "property maintenance services", "rental compliance services", "property management software"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "RentalEase - Property Compliance & Management Solutions",
    description: "Complete rental compliance and property management solutions for Victorian landlords and property managers.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "RentalEase - Property Compliance Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentalEase - Property Compliance Solutions",
    description: "Complete rental compliance and property management solutions for landlords.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GTM />
      <body className={dmSans.className}>
        <GTM />
        <GTMTester />
        <GTMSuspenseWrapper />
        {/* Google Tag Manager - NoScript (fallback) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KPZ9C622'}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* <AiSupportPopup /> */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              style: {
                background: '#10b981',
              },
            },
            error: {
              duration: 4000,
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
