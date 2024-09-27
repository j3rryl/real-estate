import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdminDashboard from "./layouts/sidebar";
import { AI } from "./layouts/ai";

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
        <AdminDashboard>
          <AI>{children}</AI>
        </AdminDashboard>
      </body>
    </html>
  );
}
