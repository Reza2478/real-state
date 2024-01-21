import type { Metadata } from "next";
import "./globals.css";
import { yekan } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import React from "react";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata: Metadata = {
  title: "املاک",
  description: "سابت خرید و فروش املاک",
  icons:{icon:"./faveicon.ico"}
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
