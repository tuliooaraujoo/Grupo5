import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bytebank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
          <body>
            {children}
          </body>
    </html>
  );
}
