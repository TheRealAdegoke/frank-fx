"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);
      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
        window.history.pushState(null, null, href);
      }
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/FX-logo.jpeg"
                alt="frank fx logo"
                width={70}
                height={70}
              />
            </Link>
            <p className="text-sm opacity-90 mt-4">
              Your trusted partner for digital skills training. We provide
              comprehensive solutions for forex trading, web development, and
              more.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Forex Trading</li>
              <li>Web Development</li>
              <li>Content Creation</li>
              <li>Digital Marketing</li>
              <li>Office Essentials</li>
              <li>Crypto Trading</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+2349126790153" className="hover:underline">
                  +234 (0) 816 653 3091
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Sat: 9am - 6pm</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`hover:text-web-color transition-colors cursor-pointer ${
                      activeHash === link.href ? "text-web-color font-bold" : ""
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} Frank FX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
