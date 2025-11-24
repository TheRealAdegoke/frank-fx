// Create a new file: components/CommunitySection.jsx
import Image from "next/image";

const CommunitySection = () => {
  const communityImages = [
    "/IMG_4028.JPG",
    "/IMG_5397.JPG",
    "/IMG_5400.JPG",
    "/IMG_5399.JPG",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our Students & Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving community of traders, developers, and creators who
            are transforming their lives through real skills.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {communityImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Frank Fx student community ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-auto max-h-[400px] md:max-h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Optional Caption */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic">
            Real students. Real classes. Real results. 💪
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
