import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function FavoriteProducts() {
    const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        const allProducts = response.data;

        const filteredFavorites = allProducts.filter(
            (product) => product.isFavourite
          );

          setProducts(allProducts);
          setFavoriteProducts(filteredFavorites);
          setIsLoading(false);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
        setError("Failed to load favorite products.");
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading favorite products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (favoriteProducts.length === 0) {
    return <div className="text-center">No favorite products found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
  
  
}
