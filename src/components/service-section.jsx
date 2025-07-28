"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Code,
  Video,
  Megaphone,
  FileText,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Forex Trading",
      description:
        "Master the art of forex trading with expert guidance. Learn proven strategies, risk management, and market analysis from a monetized trader.",
      features: [
        "Live Trading Sessions",
        "Market Analysis",
        "Risk Management",
        "Trading Psychology",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Build modern, responsive websites and web applications. From concept to deployment, we create digital solutions that drive results.",
      features: [
        "Custom Websites",
        "E-commerce Solutions",
        "Mobile-First Design",
        "SEO Optimization",
      ],
    },
    {
      icon: Video,
      title: "Content Creation",
      description:
        "Learn to create engaging content that converts. Master video production, editing, and content strategy for multiple platforms.",
      features: [
        "Video Production",
        "Content Strategy",
        "Social Media Content",
        "YouTube Optimization",
      ],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
        "Grow your online presence with proven digital marketing strategies. Drive traffic, generate leads, and increase conversions.",
      features: [
        "Social Media Marketing",
        "PPC Advertising",
        "Email Marketing",
        "Analytics & Reporting",
      ],
    },
    {
      icon: FileText,
      title: "Office Essentials",
      description:
        "Streamline your business operations with essential office solutions. From documentation to workflow optimization.",
      features: [
        "Business Documentation",
        "Process Automation",
        "Workflow Design",
        "Administrative Support",
      ],
    },
    {
      icon: TrendingUp,
      title: "Crypto Trading",
      description:
        "Dive into the world of cryptocurrency with expert-led training. Understand blockchain, analyze trends, and trade confidently in the crypto market.",
      features: [
        "Blockchain Basics",
        "Crypto Wallet Setup",
        "Technical Analysis",
        "Trading Strategies",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to help you succeed in trading, technology,
            and digital business. Learn from experts who have monetized their
            skills across multiple platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-web-color/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-web-color/50 transition-colors">
                    <IconComponent className="h-6 w-6 text-web-color" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-web-color rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of students who have transformed their skills and
              income through our expert-led programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-web-color hover:bg-web-color"
                asChild
              >
                <a href="tel:+2348166533091">Get Started Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
