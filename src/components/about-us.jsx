import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
          About Us
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Frank Fx is a training agency. We help people learn digital skills
          like forex trading, web development, crypto, and digital marketing.
        </p>
      </div>

      <div className="flex flex-row justify-center gap-10 max-md:flex-col items-center mb-20">
        <div className="w-[40%] max-w-[500px] max-md:w-[90%] max-md:max-w-[500px] relative">
          <Image
            src="/IMG_0295.JPG"
            alt="Frank Fx"
            width={400}
            height={550}
            className="w-full h-auto max-h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="w-[40%] pt-[20px] max-md:w-[90%] max-w-[500px] max-md:max-w-[500px]">
          <h3 className="text-[2rem] max-[1150px]:text-2xl font-semibold max-sm:text-xl">
            Chemist Frank
          </h3>
          <p className="font-medium text-lg max-sm:text-xs mt-3 mb-12">
            Chemist Frank is the founder of FrankFx Academy, a leading training
            hub for forex trading, crypto, web development, and content
            creation. Through practical, no-nonsense teaching, he has built a
            reputation for turning complete beginners into confident, profitable
            traders and digital entrepreneurs. At FrankFx Academy, students
            don’t just learn theory, they trade live, build real projects, and
            master skills that generate consistent income.
          </p>
          <Link
            href="https://www.youtube.com/@chemistfrankfx"
            target="_blank"
            className="border-web-color border-[1px] hover:bg-web-color hover:text-white transition-all ease-in-out px-5 py-3 text-black rounded w-[250px] text-center font-medium max-sm:text-sm max-sm:px-2 max-sm:py-2"
          >
            Subscribe to our YouTube
          </Link>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center gap-10 max-md:flex-col items-center mb-20">
        <div className="w-[40%] max-w-[500px] max-md:w-[90%] max-md:max-w-[500px] relative">
          <iframe
            src="https://www.youtube.com/embed/fZRejyscSjI?si=jtZKl1-BijB_7rmD"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-80"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[40%] pt-[20px] max-md:w-[90%] max-w-[500px] max-md:max-w-[500px]">
          <h3 className="text-[2rem] max-[1150px]:text-2xl font-semibold max-sm:text-xl">
            Learn Skills That Pay
          </h3>
          <p className="font-medium text-lg max-sm:text-xs mt-3 mb-12">
            Whether you want to trade forex, create websites, grow on YouTube,
            or learn crypto — Frank Fx will guide you step by step. No
            experience needed.
          </p>
          <Link
            href="https://www.youtube.com/@chemistfrankfx"
            target="_blank"
            className="border-web-color border-[1px] hover:bg-web-color hover:text-white transition-all ease-in-out px-5 py-3 text-black rounded w-[250px] text-center font-medium max-sm:text-sm max-sm:px-2 max-sm:py-2"
          >
            Subscribe to our YouTube
          </Link>
        </div>
      </div>

      {/* <div className="w-[90%] max-w-[1320px] mx-auto flex justify-evenly max-lg:flex-col gap-8">
        <div className="relative max-lg:max-w-[600px] mx-auto">
          <Image
            src="/about-image-1.webp"
            alt="Forex Training"
            width="400"
            height="400"
            className="w-full h-auto"
          />
          <div className="bg-[rgba(0,0,0,0.8)] w-full h-auto absolute bottom-0 z-40 text-white pt-3 pb-5 px-3">
            <h3 className="mb-2 text-xl max-sm:text-lg">
              Forex & Crypto Training
            </h3>
            <p className="max-w-[500px] text-sm max-sm:text-xs">
              Learn how to trade forex and crypto with confidence using simple
              strategies and live sessions.
            </p>
          </div>
        </div>

        <div className="relative max-lg:max-w-[600px] mx-auto">
          <Image
            src="/about-image-2.webp"
            alt="Web Design Services"
            width="400"
            height="400"
            className="w-full h-auto"
          />
          <div className="bg-[rgba(0,0,0,0.8)] w-full h-auto absolute bottom-0 z-40 text-white pt-3 pb-5 px-3">
            <h3 className="mb-2 text-xl max-sm:text-lg">Web Development</h3>
            <p className="max-w-[500px] text-sm max-sm:text-xs">
              We build websites that help businesses grow online. Clean, modern,
              and mobile-friendly.
            </p>
          </div>
        </div>

        <div className="relative max-lg:max-w-[600px] mx-auto">
          <Image
            src="/about-image-3.webp"
            alt="Digital Content Creation"
            width="400"
            height="400"
            className="w-full h-auto"
          />
          <div className="bg-[rgba(0,0,0,0.8)] w-full h-auto absolute bottom-0 z-40 text-white pt-3 pb-5 px-3">
            <h3 className="mb-2 text-xl max-sm:text-lg">Content Creation</h3>
            <p className="max-w-[500px] text-sm max-sm:text-xs">
              Learn how to make videos, grow your audience, and make money on
              YouTube and TikTok.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
