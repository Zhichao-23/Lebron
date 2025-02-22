import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { Comforter } from "next/font/google";

export const metaData: Metadata = {
  title: "Home"
};

const ComforterFont = Comforter({
  weight: "400"
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