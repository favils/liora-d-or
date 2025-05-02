export default function LovedBy() {
    return (
      <section className="bg-[#e3aa3e] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-white text-3xl font-semibold">
            As Loved By
            </h2>
            <p className="text-white mb-10">
            Trusted by the world's leading fashion and lifestyle publications.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-20 opacity-80">
                <img src="/logos/vogue.png" alt="Vogue" className="h-8 md:h-10" />
                <img src="/logos/allure.png" alt="Fendi" className="h-8 md:h-10" />
                <img src="/logos/vanityfair.png" alt="Vanity Fair" className="h-8 md:h-10" />
            </div>
        </div>
      </section>
    );
  }
  