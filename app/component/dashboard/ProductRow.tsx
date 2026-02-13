"use client";
import { useEffect, useMemo, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  placements: Array<"bestseller" | "current">;
  displayOrder: number;
  image?: string;
  available: boolean;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ProductRow() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        const data = await res.json();
        if (data.products) setProducts(data.products);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const currentProducts = useMemo(
    () => products.filter((product) => product.available && (product.placements || []).includes("current")),
    [products]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-700">CURRENT</h2>
        <button className="text-sm text-slate-600 hover:underline">See more</button>
      </div>

      {isLoading && currentProducts.length === 0 ? (
        <div className="text-sm text-slate-500">Loading products...</div>
      ) : currentProducts.length === 0 ? (
        <div className="text-sm text-slate-500">No current products yet.</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {currentProducts.map((product) => (
            <div key={product._id} className="rounded-2xl border bg-white p-3">
              {product.image ? (
                <img
                  src={`${API_BASE}/uploads/${product.image}`}
                  alt={product.name}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              ) : (
                <div className="aspect-square w-full rounded-xl bg-red-500/80" />
              )}

              <div className="mt-3 space-y-1">
                <div className="text-sm font-semibold text-slate-800">
                  {product.name}
                </div>
                <div className="text-sm text-slate-500">${product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
