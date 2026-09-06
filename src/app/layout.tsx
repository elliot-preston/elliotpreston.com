import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elliot Preston — Work & Music",
  description: "A personal publication by Elliot Preston. Work, music, and selected perspectives.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
