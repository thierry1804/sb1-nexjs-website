"use client";

import { ShoppingBag, TrendingUp, Truck, Shield } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Quality Products</h3>
              <p className="text-sm text-muted-foreground">Curated selection</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Best Prices</h3>
              <p className="text-sm text-muted-foreground">Direct from source</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Global delivery</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground">100% protected</p>
            </div>
          </div>
        </div>

        <FeaturedSection />
        <ProductGrid />
      </section>
    </main>
  );
}