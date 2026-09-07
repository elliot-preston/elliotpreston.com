import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elliotpreston.com"),
  title: "Elliot Preston",
  description: "Technical leader, software quality specialist, and musician based in Seattle.",
  twitter: {
    card: "summary_large_image",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Elliot Preston — Technical leadership · Software quality · Music",
    }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
