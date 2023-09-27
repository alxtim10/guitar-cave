"use client";

import { CartProvider } from "@/contexts/cart.context";
import { ShopProvider } from "@/contexts/shop.context";

export function Providers({ children }) {
  return (
    <ShopProvider>
      <CartProvider>{children}</CartProvider>
    </ShopProvider>
  );
}
