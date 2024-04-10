import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/presentation/syled/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samir Andrade: FullStack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
      <GlobalStyle/>
    </html>
  );
}
