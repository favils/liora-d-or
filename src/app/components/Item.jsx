export default function ShopItem({ name, price, link, rating }) {
  return (
    <div className="bg-amber-50 rounded-md overflow-hidden transition-all group max-w-xs mx-auto">  {/* Smaller container size and centered */}
      
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={link}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 text-center">
          <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
              <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < rating ? "#000" : "#e5e7eb"}
                  className="w-5 h-5"
              >
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.402 8.177L12 18.896l-7.336 3.856 1.402-8.177-5.934-5.782 8.2-1.193z" />
              </svg>
              ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-md mt-1">${price}</p>
          <button className="mt-4 w-full text-black underline text-sm py-2 rounded-full font-medium hover:bg-amber-800 transition-colors">
              Add to Cart
          </button>
      </div>
    </div>
  );
}
