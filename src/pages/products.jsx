import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterComponent from "../components/FilterComponent";
import axios from "axios";
import { FourSquare } from "react-loading-indicators";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product");
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log("Products fetched:", response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    const { category, priceRange, showFavorites } = filters;

    console.log("Applying filters:", filters); // Debugging log

    // Filter logic
    const filtered = products.filter((product) => {
      const matchesCategory = category ? product.category.name === category : true;
      const matchesPrice = product.price <= priceRange; // Use single value for priceRange
      const matchesFavorite = showFavorites ? product.isFavourite : true;

      return matchesCategory && matchesPrice && matchesFavorite;
    });

    setFilteredProducts(filtered);

    console.log("Filtered Products:", filtered); // Debugging log
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FourSquare color="#9333EA" size="medium"/>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Filter Section */}
      <div className="w-1/4">
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>

      {/* Products Section */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="text-center text-gray-600">
            No products match the selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
