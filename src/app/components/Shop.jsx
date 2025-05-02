import FadeInText from "./FadeInText";
import ShopItem from "./Item";

export default function Shop() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeInText text="Favorite Scents" className="text-3xl font-semibold"/>

        <p className="floatin mt-4 text-gray-600 max-w-2xl mx-auto">
          Uncover the luxury of rare, must-have fragrances—exclusively for those who know. Limited, coveted, and always unforgettable.
        </p>

        <div className="mt-12 w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
            <ShopItem
              name="Green Vanille"
              subtitle="Vanilla, green flora & spiced almond milk"
              brand="RÉGIME DES FLEURS"
              priceRange="$6.00 - $260.00"
              image="test.png"
              rating={4}
              reviews={2}
            />
            <ShopItem
              name="Tulum Junglescape"
              subtitle="Exotic fruits, lush vegetal flora, sea spray"
              brand="SIMONE ANDREOLI"
              priceRange="$5.00 - $189.00"
              image="test2.png"
              rating={4}
              reviews={0}
            />
            <ShopItem
              name="Sakura Snow"
              subtitle=""
              brand="D'ANAM"
              priceRange="$5.00 - $160.00"
              image="test3.png"
              rating={3}
              reviews={1}
              soldOut
            />
          </div>
        </div>
      </div>
    </section>
  );
}
