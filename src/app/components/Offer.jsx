export default function Offer() {
    return (
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/offerbg.jpg')",
        }}
      >
        <div className="p-8 text-center max-w-3xl">
          <p className="uppercase text-sm tracking-widest mb-2">Special Offer</p>
          <h2 className="text-4xl font-light leading-snug mb-4">
            <span className="font-semibold italic">Limited Offer!</span>{' '}
            Get Free Product Samples <br /> for Your First Purchase!
          </h2>
          <p className="text-gray-100 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu tortor,
            elementum euismod enim id, finibus fermentum sem.
          </p>
          <button className="bg-white text-black hover:bg-gray-700 font-semibold px-6 py-2 rounded transition">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  