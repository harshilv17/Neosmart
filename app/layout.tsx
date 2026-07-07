import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Neosmart is a studio that builds intelligent systems, products, and brands around you — designed and built by the same people, and yours to keep.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neosmartlabs.com"),
  title: {
    default: "Neosmart — Made for one.",
    template: "%s — Neosmart",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Neosmart",
    title: "Neosmart — Made for one.",
    description:
      "A studio that builds intelligent systems, products, and brands around you — designed and built by the same people, and yours to keep.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1613",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken.variable}>
      <head>
        {/* Microsoft Clarity — analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj3z1x3mof");`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
