import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">Gaamodaa</h2>
          <p className="mt-2 text-gray-400">
            Gaamodaa is your ultimate destination for discovering, exploring, and experiencing the best that the digital world has to offer.
            We aim to bring quality content, seamless services, and user-friendly experiences to our audience. Whether you are looking for
            insights, services, or simply a place to engage with meaningful content, Gaamodaa is the platform that connects you to endless
            possibilities. Our commitment to innovation and excellence ensures that you always get the best experiences possible.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/santosh.tamang.983807" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg"><FaTwitter /></a>
            <a href="https://www.instagram.com/santoshtamang484/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-lg"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gaamodaa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
