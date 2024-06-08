import type { Metadata } from "next";

import "@/styles/globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Twitter OG",
  description: "Twitter Example Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <nav className="flex items-center px-2 h-10 border-b border-white/20">
            Twitter Example
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
