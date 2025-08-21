import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-10 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900 mb-4">Company</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
            <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
            <li className="hover:text-blue-600 cursor-pointer">Gift Cards</li>
            <li className="hover:text-blue-600 cursor-pointer">Magazine</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900 mb-4">Support</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 cursor-pointer">Legal Notice</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-600 cursor-pointer">Sitemap</li>
          </ul>
        </div>

        {/* Other Services */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900 mb-4">Other Services</h1>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Car Hire</li>
            <li className="hover:text-blue-600 cursor-pointer">Activity Finder</li>
            <li className="hover:text-blue-600 cursor-pointer">Tour List</li>
            <li className="hover:text-blue-600 cursor-pointer">Flight Finder</li>
            <li className="hover:text-blue-600 cursor-pointer">Travel Agents</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h1>
          <p className="mb-2 text-sm">📞 +012 345 6788</p>
          <p className="text-sm">📧 example@gmail.com</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
            <FaLinkedin className="cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
