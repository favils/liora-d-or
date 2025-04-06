import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">

      <div className="w-full h-full z-10 flex flex-col items-start justify-center px-6 sm:px-40 py-10 space-y-2">
        <span className="text-white font-serif text-8xl">
          Our Liora d'Or Collection
        </span>
        <span className="text-white text-lg font-bold">
          Discover the Fragrance
        </span>
      </div>

      <Image
        src="/hero.jpg"
        alt="Hero Image"
        fill
        className="object-cover object-center sm:object-[70%] -z-10"
      />
    </div>
  );
}
