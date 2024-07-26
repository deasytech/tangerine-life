import type { Metadata } from "next";
import "./globals.css";
import {
  gilroyBlack,
  gilroyBold,
  gilroyLight,
  gilroyMedium,
  gilroyRegular,
  gilroySemiBold,
} from "@/app/font/font";

export const metadata: Metadata = {
  title: "Tangerine Life",
  description:
    "At Tangerine Life, we're committed to helping you secure your financial future with confidence. Our range of innovative insurance products is designed to meet your unique needs, providing peace of mind for you and your loved ones. Explore our offerings and discover how we can protect what matters most to you.",
  assets: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyRegular.variable} ${gilroyBlack.variable} ${gilroyBold.variable} ${gilroyLight.variable} ${gilroyMedium.variable} ${gilroySemiBold.variable}`}
      >
        <main className="relative overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
