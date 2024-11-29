"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
];

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card 
            key={product.id}
            className="overflow-hidden"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <CardContent className="p-0 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover"
              />
              {hoveredProduct === product.id && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="secondary">
                    Quick View
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-lg font-bold text-primary">${product.price}</p>
              </div>
              <Button size="icon" variant="outline">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}