import type { Metadata } from "next";

import { Providers } from "./providers";
import "./styles/globals.css";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
