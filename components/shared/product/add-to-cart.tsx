"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { toast, Toaster } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    // Execute the addItemToCart action
    const res = await addItemToCart(item);

    // Display appropriate toast message based on the result
    if (!res.success) {
      toast.error(res.message, {
        style: {
          color: "red", // Change the text color to red
          border: "1px solid red", // Add a red border
        },
      });
      return;
    }

    toast.success(`${res.message}`, {
      action: {
        label: "Go to cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <>
      <Button className="w-full" type="button" onClick={handleAddToCart}>
        Add To Cart
      </Button>
      <Toaster />
    </>
  );
};

export default AddToCart;
