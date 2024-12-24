import React, { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(100); // Single value for range
  const [showFavorites, setShowFavorites] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({
      category: e.target.value,
      priceRange,
      showFavorites,
    });
  };

  const handlePriceChange = (e) => {
    const range = Number(e.target.value); // Use single value for range
    setPriceRange(range);
    onFilterChange({
      category: selectedCategory,
      priceRange: range,
      showFavorites,
    });
  };

  const handleFavoriteToggle = () => {
    const updatedShowFavorites = !showFavorites;
    setShowFavorites(updatedShowFavorites);
    onFilterChange({
      category: selectedCategory,
      priceRange,
      showFavorites: updatedShowFavorites,
    });
  };

  return (
    <div className="p-4 border-r border-gray-300 h-full bg-white">
      <h2 className="text-xl font-bold text-violet-600 mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Price Range</label>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full accent-violet-600"
        />
        <p className="text-sm text-gray-600 mt-2">Up to ${priceRange}</p>
      </div>

      {/* Favorites Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Favorites</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={handleFavoriteToggle}
            className="mr-2 accent-violet-600"
          />
          <span>Show Only Favorites</span>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
