import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feast | Indulge the Crunch",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  description:
    "Experience Feast — the ultimate chocolate-coated ice cream bar loaded with crunchy roasted nuts and a velvety chocolate ice cream center. Indulge the crunch.",
  keywords: [
    "Feast Ice Cream",
    "Chocolate Ice Cream Bar",
    "Roasted Nuts",
    "Crunchy Chocolate",
    "Premium Ice Cream",
    "Gourmet Dessert",
  ],
  authors: [{ name: "Feast Confectionery" }],
  openGraph: {
    title: "Feast | Indulge the Crunch",
    description:
      "A rich chocolate shell packed with roasted nut pieces surrounding a smooth, creamy chocolate ice cream center.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B1209",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-chocolate-dark text-cream antialiased selection:bg-caramel selection:text-chocolate-darkest">
        {children}
      </body>
    </html>
  );
}
