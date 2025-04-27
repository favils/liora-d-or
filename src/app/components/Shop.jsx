import ShopItem from "./Item";

export default function Shop() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-5xl font-serif font-light text-amber-600">
          Most Loved Scents
        </h2>
        
        <p className="mt-4 text-lg font-light text-gray-600 max-w-2xl mx-auto">
          Uncover the luxury of rare, must-have fragrances—exclusively for those who know. Limited, coveted, and always unforgettable.
        </p>

        <div className="mt-12 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto gap-10">
            <ShopItem name="Velvet Bloom" price="79.99" link="test.png" rating={5} />
            <ShopItem name="Mystic Oud" price="89.99" link="test2.png" rating={4} />
            <ShopItem name="Amber Rose" price="69.99" link="test3.png" rating={4} />
          </div>
        </div>

      </div>
    </section>
  );
}
