import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">About Prime<span className="text-violet-600">Cart</span></h3>
            <p className="text-sm">
              PrimeCart is your one-stop shop for the best deals on a wide range
              of products. Shop with us and experience exceptional service and
              quality.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          <p>© 2024 PrimeCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
