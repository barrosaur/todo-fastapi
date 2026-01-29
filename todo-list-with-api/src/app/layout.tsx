import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo With API",
  description: "api, todo, fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
