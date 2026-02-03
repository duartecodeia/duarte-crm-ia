import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duarte CRM IA",
  description: "Aprendizado de UI/UX com IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
