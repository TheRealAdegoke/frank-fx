"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

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
        window.history.pushState(null, null, href); // Update URL hash
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/FX-logo.jpeg"
                alt="frank fx logo"
                width={70}
                height={70}
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`text-gray-700 hover:text-web-color font-medium transition-colors cursor-pointer ${
                    pathname === "/" && activeHash === item.href
                      ? "text-web-color font-bold underline"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button
                size="lg"
                className="bg-web-color hover:bg-web-color"
                asChild
              >
                <a href="tel:+2348166533091">Contact Us</a>
              </Button>
            </nav>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-96 px-4">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className={`text-lg font-medium text-gray-700 hover:text-web-color transition-colors cursor-pointer ${
                        pathname === "/" && activeHash === item.href
                          ? "text-web-color font-bold underline"
                          : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button
                    className="bg-web-color hover:bg-web-color/90 mt-4"
                    asChild
                  >
                    <a href="tel:+2348166533091">Contact Us</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
