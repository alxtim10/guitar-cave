import "./globals.css";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Guitar Cave",
  description: "Finest Guitar Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
