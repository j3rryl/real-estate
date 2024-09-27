import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminDashboard from "./layouts/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate AI",
  description: "Created by me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminDashboard>{children}</AdminDashboard>
      </body>
    </html>
  );
}
