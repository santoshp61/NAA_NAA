import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-900 text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-400 drop-shadow-lg">
        Our Services
      </h1>

      <div className="space-y-8 text-lg max-w-3xl mx-auto text-gray-300">
        <p>
          At Gaamodaa, we offer a wide range of digital services designed to help you achieve your goals. From website development and digital marketing to content creation and tech consulting, our team is dedicated to delivering excellence.
        </p>

        <p className="text-purple-400 font-medium">
          Our services include:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li className="hover:text-purple-500 transition">Custom website and app development</li>
          <li className="hover:text-purple-500 transition">SEO and digital marketing strategies</li>
          <li className="hover:text-purple-500 transition">Social media management</li>
          <li className="hover:text-purple-500 transition">Content creation and copywriting</li>
          <li className="hover:text-purple-500 transition">IT consulting and support</li>
        </ul>

        <p>
          We believe in tailored solutions to fit your unique needs and help your brand grow in the digital world.
        </p>
      </div>
    </section>
  );
};

export default Services;
