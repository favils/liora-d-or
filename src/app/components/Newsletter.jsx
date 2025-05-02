export default function NewsletterSignup() {
    return (
      <section className="w-full bg-white py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="max-w-md">
          <img
            src="/images/perfumebottle.jpg"
            alt="Perfume bottle"
            className="w-full object-cover"
          />
        </div>
  
        <div className="max-w-md w-full">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Discover the Art of Scent</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Be the first to explore our newest collections, exclusive offers,
            and behind-the-scenes stories.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Enter your E-mail"
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="border-gray-400" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                I accept the privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 text-sm font-medium border offer fill2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    );
  }
  