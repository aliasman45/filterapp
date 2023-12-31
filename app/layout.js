import "./globals.css";
import { Inter } from "next/font/google";
import { FilterProvider } from "@/context/filterCotext";
import { CartContextProvider } from "@/context/cartContext";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-10`}>
        <CartContextProvider>
          <FilterProvider>
            <Nav />
            {children}
          </FilterProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
