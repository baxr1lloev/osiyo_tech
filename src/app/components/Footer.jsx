"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/osiyotech1.svg"
              alt="OsiyoTech Logo"
              width={60}
              height={60}
              className="h-14 w-18 mr-3  cursor-pointer"
              onClick={() => window.location.reload()}
            />
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Leading technology solutions provider helping businesses transform
              and thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 dark:text-gray-400 hover:text-blue-400 transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  +998-78-150-00-57
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  contact@enera.uz
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">
                  Tashkent, Bunyodkor prospekt, 47
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} OsiyoTech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
