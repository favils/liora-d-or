import Image from "next/image";
import FadeInText from "./components/FadeInText";
import Shop from "./components/Shop";
import Collections from "./components/Collections";
import LovedBy from "./components/LovedBy";
import Offer from "./components/Offer";
import NewsletterSignup from "./components/Newsletter";
import Footer from "./components/Footer";
import FadeInWhenVisible from "./components/FadeInWhenVisible";

export default function Home() {
  return (
    <>
      <div className="w-full h-[600px] relative overflow-hidden">
        <div className="w-full h-full z-10 flex flex-col items-start justify-center px-6 sm:px-40 py-10 space-y-2">
          <div className="inline-block">
            <FadeInText text="Our" className="inline-block mr-3 text-white font-serif text-5xl" />
            <FadeInText text="Liora " className="inline-block text-white font-serif text-9xl" />
            <FadeInText text="d'Or " className="inline-block text-white font-serif text-9xl" />
            <FadeInText text="Collection " className="inline-block text-white font-serif text-5xl" />
          
          </div>
          <button className="shop scalein fill">
            Shop Now
          </button>

        </div>
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center sm:object-[70%] -z-10"
        />
      </div>
      <FadeInWhenVisible>
        <Shop />
      </FadeInWhenVisible>
      
      <FadeInWhenVisible>
        <LovedBy />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Collections />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Offer />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <NewsletterSignup />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </>
  );
}
