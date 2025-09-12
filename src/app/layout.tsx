import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rkvlorenzo",
  description: "Ralph Kenneth Lorenzo Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#161513]">
        {children}
      </body>
    </html>
  );
}
