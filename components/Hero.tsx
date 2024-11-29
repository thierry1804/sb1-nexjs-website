"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Trendy Fashion
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Explore our curated collection of premium clothing and accessories imported directly from China.
          Quality meets affordability in every piece.
        </p>
        <div className="mt-10">
          <Button size="lg" className="mr-4">
            Shop Now
          </Button>
          <Button variant="outline" size="lg">
            View Collections
          </Button>
        </div>
      </div>
    </div>
  );
}