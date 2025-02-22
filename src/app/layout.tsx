import React from "react";
import "./globals.css";
import { Comforter } from "next/font/google";

const ComforterFont = Comforter({
  weight: "400",
  subsets: ["latin"]
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ComforterFont.className}>
        {children}
      </body>
    </html>
  );
}