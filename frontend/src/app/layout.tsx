import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "SmartInterlock - Forklift PTO Safety System",
  description: "Tingkatkan Keamanan & Efisiensi Armada Forklift Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        />
      </head>
      <body className="antialiased bg-surface font-sans text-on-surface">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}