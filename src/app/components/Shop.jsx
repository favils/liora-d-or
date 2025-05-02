import FadeInText from "./FadeInText";
import ShopItem from "./Item";

export default function Shop() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeInText text="Favorite Scents" className="text-3xl font-semibold mb-2"/>

        <p className="floatin max-w-2xl mx-auto text-gray-600 mb-10">
          Uncover the luxury of rare, must-have fragrances—exclusively for those who know. Limited, coveted, and always unforgettable.
        </p>

        <div className="mt-12 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
            <ShopItem
              name="Liora d'Or"
              subtitle="Honey, amber wood & spiced almond milk"
              priceRange="$6.00 - $260.00"
              image="test.png"
              rating={4}
            />
            <ShopItem
              name="Liora d'Tulum"
              subtitle="Exotic fruits, lush vegetal flora, sea spray"
              priceRange="$5.00 - $189.00"
              image="test2.png"
              rating={4}
            />
            <ShopItem
              name="Liora d'Nieve"
              subtitle="Wet Snow, woodland moss, and spearmint leaves"
              priceRange="$5.00 - $160.00"
              image="test3.png"
              rating={3}
              soldOut
            />
          </div>
        </div>
      </div>
    </section>
  );
}
