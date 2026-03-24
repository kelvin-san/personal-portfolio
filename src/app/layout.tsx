import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kelvin | Desenvolvedor SAP ABAP",
  description: "Desenvolvedor SAP ABAP com experiência em integrações e lógica de negócios"
  + " em ambientes corporativos. Em evolução contínua na área de desenvolvimento de software," 
  + " explorando diferentes tecnologias e abordagens, incluindo aplicações web com React, Next.js"
  + " e Node.js, construindo arquiteturas coesas sempre com atenção a boas práticas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
