export default function ShopItem({ name, subtitle, brand, priceRange, image, rating, reviews, soldOut }) {
  return (
    <div className="bg-white overflow-hidden text-center max-w-xs mx-auto relative border p-4">
      {soldOut && (
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          Sold Out
        </div>
      )}

      <img src={image} alt={name} className="w-full h-48 object-contain mx-auto" />

      <h3 className="mt-4 text-md font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>

      <p className="italic text-sm text-gray-400 mt-2">Samples out of stock.</p>

      <p className="text-sm text-gray-700 mt-1">{brand}</p>
      <p className="text-sm text-gray-800 mt-1">{priceRange}</p>

      <div className="flex justify-center items-center mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < rating ? "#fbbf24" : "#e5e7eb"}
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.177L12 18.896l-7.336 3.856 1.402-8.177-5.934-5.782 8.2-1.193z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">{reviews} review{reviews !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}
