import React from "react";
import { Link } from "react-router-dom";
import PageLogo from "../../assets/image/svg/logo.svg";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="text-[#C1C1C1] lg:max-w-[1290px] container mx-auto px-6 pt-20 pb-10">
        <div className="flex items-start  justify-between gap-10">
          {/* Logo and Description */}
          <div className="w-full md:w-[40%]">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={PageLogo} alt="Logo" className="w-32" />
            </Link>
            <p className="text-sm leading-relaxed text-[#999]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quidem voluptate adipisci tempor
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="/">
                <FaFacebook className="text-[#C1C1C1] hover:text-white transition" size={22} />
              </Link>
              <Link to="/">
                <FaInstagram className="text-[#C1C1C1] hover:text-white transition" size={22} />
              </Link>
              <Link to="/">
                <FaTwitter className="text-[#C1C1C1] hover:text-white transition" size={22} />
              </Link>
              <Link to="/">
                <FaLinkedinIn className="text-[#C1C1C1] hover:text-white transition" size={22} />
              </Link>
            </div>
          </div>

          {/* Footer Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-[60%]">
            {/* Company */}
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm">Company</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm">Support</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
                <li><Link to="/shipping" className="hover:text-white">Shipping</Link></li>
                <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm">Resources</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/guides" className="hover:text-white">Guides</Link></li>
                <li><Link to="/sitemap" className="hover:text-white">Sitemap</Link></li>
              </ul>
            </div>

            {/* Map / Location */}
            <div>
              <h2 className="text-white font-semibold mb-4 text-sm">Our Location</h2>
              <div className="text-sm text-[#999] leading-relaxed">
                1234 Startup Lane<br />
                Bengaluru, India<br />
                +91 98765 43210
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-xs text-gray-700 text-center border-t border-[#2F2F2F]">
        © 2023 PC CLASSIC CAR
      </div>
    </footer>
  );
};

export default Footer;