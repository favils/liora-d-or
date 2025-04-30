export default function VisitStores() {
    return (
      <section className="w-full h-[500px] relative">
        <iframe
          title="Store Locations Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.059049369971!2d-122.43715388468127!3d37.79122997975701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a22a2f6277%3A0xa7d60762dbd46b0b!2s2408%20Fillmore%20St%2C%20San%20Francisco%2C%20CA%2094115!5e0!3m2!1sen!2sus!4v1617140106496!5m2!1sen!2sus"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        />
  
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-[90%] max-w-md shadow-lg z-10">
          <h2 className="text-2xl font-semibold mb-4">VISIT OUR STORES</h2>
          <div className="mb-4">
            <p className="font-bold">Pacific Heights</p>
            <p>2408 Fillmore Street</p>
            <p>San Francisco, CA 94115</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Mission District</p>
            <p>962 Valencia Street</p>
            <p>San Francisco, CA 94110</p>
          </div>
          <p className="mb-2">Both stores are open 11am–7pm every day.</p>
          <p className="text-sm text-gray-600">Questions? Contact us before your visit!</p>
          <p className="mt-1 text-sm">415.896.4665</p>
          <a href="mailto:info@liorador.com" className="underline text-sm text-blue-700">
            info@ministryofscent.com
          </a>
        </div>
      </section>
    );
  }
  