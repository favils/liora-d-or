export default function LovedBy() {
    return (
      <section className="bg-gradient-to-r from-[#f0f4f7] to-[#fdf6f0] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-serif font-light italic">
            As Loved By
            </h2>
            <p className="text-gray-600 mb-10">
            Trusted by the world's leading fashion and lifestyle publications.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-20 opacity-80">
                <img src="/logos/vogue.svg" alt="Vogue" className="h-8 md:h-10" />
                <img src="/logos/fendi.png" alt="Fendi" className="h-8 md:h-10" />
                <img src="/logos/vanityfair.png" alt="Vanity Fair" className="h-8 md:h-10" />
            </div>
        </div>
      </section>
    );
  }
  