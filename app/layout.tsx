import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proceedings of Preposterous Sciences",
  description: "An aggregation of research on peculiar phenomena",
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
