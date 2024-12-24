import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TrendingProducts = () => {
  // Mock Product Data
  const trendingProducts = [
    {
      id: 1,
      title: "Modern Wireless Headphones",
      price: 99.99,
      rating: 4,
      reviews: 120,
      image: "https://freshnrebel.com/media/50/5f/39/1731509513/freshnrebel-hover-clam-junior.jpg",
      description:
        "High-quality wireless headphones with noise cancellation, long battery life, and a comfortable fit.",
    },
    {
      id: 2,
      title: "Smartphone with AMOLED Display",
      price: 699.99,
      rating: 5,
      reviews: 200,
      image: "https://freshnrebel.com/media/50/5f/39/1731509513/freshnrebel-hover-clam-junior.jpg",
      description:
        "Next-gen smartphone with stunning display, powerful processor, and long-lasting battery.",
    },
    {
      id: 3,
      title: "Ergonomic Office Chair",
      price: 199.99,
      rating: 4,
      reviews: 80,
      image: "https://freshnrebel.com/media/50/5f/39/1731509513/freshnrebel-hover-clam-junior.jpg",
      description:
        "Comfortable office chair with lumbar support and adjustable height.",
    },
    {
      id: 4,
      title: "Gaming Laptop",
      price: 1199.99,
      rating: 5,
      reviews: 150,
      image: "https://freshnrebel.com/media/50/5f/39/1731509513/freshnrebel-hover-clam-junior.jpg",
      description:
        "High-performance gaming laptop with top-tier graphics and cooling system.",
    },
  ];

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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-24">
      <h2 className="flex justify-center text-3xl font-bold text-gray-800 mb-6">
        Trending Products
      </h2>
      <Slider {...settings}>
        {trendingProducts.map((product) => (
          <div key={product.id} className="p-4 ">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingProducts;
