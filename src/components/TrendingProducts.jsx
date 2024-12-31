import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Trending Products
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/product/trending");
        setTrendingProducts(response.data); // Assuming API returns an array of products
        setLoading(false);
      } catch (err) {
        console.error("Error fetching trending products:", err);
        setError(err.message || "Error fetching trending products");
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  // Custom Arrows for the Slider
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition"
    >
      <FaArrowLeft />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition"
    >
      <FaArrowRight />
    </button>
  );

  // React Slick Settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading Trending Products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="px-4 py-24">
      <h2 className="flex justify-center text-3xl font-bold text-gray-800 mb-6">
        Trending Products
      </h2>
      <Slider {...settings}>
        {trendingProducts.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingProducts;
