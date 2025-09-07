import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./clicdesign.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ClicDesign - IA pour générer des visuels e-commerce en 1 clic",
  description: "Crée des visuels e-commerce qui vendent pendant que tu dors. Fini les visuels moches. Fini les designers chers. ClicDesign, c'est ton générateur d'images produit IA.",
  keywords: "IA, design, e-commerce, visuels, mockups, packagings, dropshipping, Shopify",
  authors: [{ name: "ClicDesign" }],
  creator: "ClicDesign",
  publisher: "ClicDesign",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-cream text-navy`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}