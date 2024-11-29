"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function FeaturedSection() {
  const collections = [
    {
      id: 1,
      name: "Summer Collection",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <Card key={collection.id} className="overflow-hidden cursor-pointer group">
            <CardContent className="p-0 relative">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">{collection.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}