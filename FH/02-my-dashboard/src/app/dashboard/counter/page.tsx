import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador"
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito de compras</span>
      <CartCounter value={10}/>
    </div>
  );
}
