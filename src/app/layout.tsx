import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "idOS Trusted Agents",
  description:
    "Identity-gated API marketplace where AI agents pay with USDC and prove identity through idOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div id="idos-enclave-container" />
        {children}
      </body>
    </html>
  );
}
