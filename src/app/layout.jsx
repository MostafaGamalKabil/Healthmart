import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "description for Home page",
  icons: {},
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
