import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proceedings of Preposterous Sciences",
  description: "Collection of reaserch on peculiar subjects",
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
