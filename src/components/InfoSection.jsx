import React from "react";
import DeliveryGuy from "../assets/delivery-guy.png";

const InfoSection = () => {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Why Shop With Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Fast Delivery */}
        <div className="relative bg-violet-600 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out col-span-1 lg:col-span-2 lg:row-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm">
                Get your products delivered to your doorstep in record time.
              </p>
              <ul className="text-sm list-disc pl-5 space-y-1 mt-5">
                <li>Same-day delivery for selected products</li>
                <li>Real-time tracking of your package</li>
                <li>Free delivery for orders over $50</li>
              </ul>
            </div>
            <div>
              <img
                src={DeliveryGuy}
                alt="Fast Delivery"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Quality Products */}
        <div className="relative bg-violet-600 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-sm">
            We ensure the highest quality in all our products.
          </p>
        </div>

        {/* Card 3: Customer Support */}
        <div className="relative bg-violet-600 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p className="text-sm">
            24/7 support to assist you with any queries.
          </p>
        </div>

        {/* Card 4: Secure Payments */}
        <div className="relative bg-violet-600 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-sm">
            Your transactions are 100% safe with our secure gateway.
          </p>
        </div>

        {/* Card 5: Easy Returns */}
        <div className="relative bg-violet-600 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-sm">
            Hassle-free returns for all eligible products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
