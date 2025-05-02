'use client'

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Perfume",
    image: "/images/perfume.jpg",
  },
  {
    title: "Makeup",
    image: "/images/makeup.jpg",
  },
  {
    title: "Home fragrance",
    image: "/images/home.jpg",
  },
  {
    title: "Hand & body care",
    image: "/images/body.jpg",
  },
];

export default function Collections() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? collections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-6 py-12 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-2">Collections</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Explore our curated collection, designed to capture your personal journey of exploration and discovery.
        Let your curiosity guide you to finding a fragrance that becomes your signature scent.
      </p>

      <div className="flex justify-center gap-4 overflow-x-auto max-w-4xl mx-auto">
        {collections.map((item, index) => (
          <div key={index} className={`w-[200px] shrink-0 transition-opacity duration-300 ${index === activeIndex ? "opacity-100" : "opacity-50"}`}>
            <img src={item.image} alt={item.title} className="w-full h-[250px] object-cover mb-2" />
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ArrowLeft size={16} />
        </button>

        <div className="flex gap-2">
          {collections.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>

        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
