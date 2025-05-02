'use client';

import { useEffect, useState } from 'react';

export default function Offer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/offerbg.jpg')",
      }}
      aria-label="Special Offer Section"
    >
      <div className="p-8 text-center max-w-3xl bg-white bg-opacity-50 rounded-lg">
        <p className="uppercase text-sm tracking-widest mb-2">Special Offer</p>
        <h2 className="text-4xl font-light leading-snug mb-4">
          <span className="font-semibold italic">Limited Offer!</span>{' '}
          Get Free Product Samples <br /> for Your First Purchase!
        </h2>
        <p className="text-gray-400 mb-6">
        Experience our products risk-free. Claim your complimentary samples when you make your first purchase. Don’t miss out—supplies are limited!
        </p>
        <button
          className="border offer fill2 font-semibold px-6 py-2 transition mx-auto"
          aria-label="Learn more about our special offer"
        >
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
