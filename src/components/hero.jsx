"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const heroImages = [
    {
      src: "/hero-image-1.webp",
      alt: "Forex Trader Expert",
      title: "Master Forex Trading with a Pro",
      description:
        "Learn the skills to trade confidently and profitably in the forex market. Get real strategies from a monetized expert who teaches from experience.",
    },
    {
      src: "/hero-image-2.webp",
      alt: "Learn from a Monetized YouTuber",
      title: "Learn From a Monetized YouTuber",
      description:
        "Join our expert-led sessions and discover how to create content that earns on platforms like YouTube, TikTok, and more.",
    },
  ];

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

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/80" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white mb-4 backdrop-blur-sm">
              Forex Trading & Web development
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white max-w-[37rem]">
              {heroImages[currentImage].title}
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              {heroImages[currentImage].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-web-color hover:bg-gray-100 shadow-lg"
                asChild
              >
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, "#services")}
                  className="cursor-pointer"
                >
                  Services
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-black backdrop-blur-sm"
                asChild
              >
                <a href="tel:+2349126790153">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +234 (0) 816 653 3091
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;