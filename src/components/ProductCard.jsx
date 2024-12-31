import React, { useState } from "react";
import { FaShoppingCart, FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

const ProductCard = ({ product, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavourite);

  // Handle Favorite Toggle
  const handleFavoriteToggle = async () => {
    const previousState = isFavorite; // Save the previous state
    setIsFavorite(!isFavorite); // Optimistically update the state

    try {
      const response = await axios.patch(`http://localhost:5000/api/product/${product.id}/favourite`);

      if (response.status === 200) {
        const updatedProduct = response.data.product;
        setIsFavorite(updatedProduct.isFavourite); // Synchronize with server response
        if (onFavoriteToggle) onFavoriteToggle(product.id, updatedProduct.isFavourite);
      } else {
        throw new Error("Failed to toggle favorite status");
      }
    } catch (error) {
      console.error("Error toggling favorite status:", error);
      setIsFavorite(previousState); // Revert to the previous state on failure
    }
  };
  const productImage =
  product.images && product.images.length > 0
    ? product.images[0].imageUrl
    : "uploads/placeholder1.png";

console.log("Product Image URL:", productImage);
  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src={`http://localhost:5000/${productImage}`}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      {/* Favorite Icon */}
      <button
        className={`absolute top-4 right-4 text-gray-700 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition`}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? (
          <FaHeart className="w-5 h-5 text-red-500" />
        ) : (
          <FaRegHeart className="w-5 h-5" />
        )}
      </button>
      {/* Product Details */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        {/* Price */}
        <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
        {/* Reviews */}
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < product.rating ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-gray-400" />
              )}
            </span>
          ))}
          <span className="text-gray-600 text-sm ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>
        {/* Add to Cart Button */}
        <button className="w-full mt-4 flex items-center justify-center bg-black text-white py-2 rounded-lg shadow-md hover:bg-violet-600 hover:shadow-lg transition">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
