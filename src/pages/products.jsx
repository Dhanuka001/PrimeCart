import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterComponent from "../components/FilterComponent";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const { category, priceRange, showFavorites } = filters;

    const filtered = products.filter((product) => {
      const matchesCategory = category ? product.category.name === category : true;
      const matchesPrice = product.price <= priceRange[1];
      const matchesFavorite = showFavorites ? product.isFavourite : true;

      return matchesCategory && matchesPrice && matchesFavorite;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      {/* Filter Section */}
      <div className="w-1/4">
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>

      {/* Products Section */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onFavoriteToggle={(id, isFavorite) => {
              // Update favorite state in both products and filteredProducts
              setProducts((prevProducts) =>
                prevProducts.map((p) =>
                  p.id === id ? { ...p, isFavourite: isFavorite } : p
                )
              );
              setFilteredProducts((prevFiltered) =>
                prevFiltered.map((p) =>
                  p.id === id ? { ...p, isFavourite: isFavorite } : p
                )
              );
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
