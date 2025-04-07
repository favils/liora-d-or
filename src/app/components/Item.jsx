export default function ShopItem() {
    return (
        <div className="w-[20%] h-[500px] p-4">
            <img
                src="test.png"
                alt="Product"
                className="w-full h-auto object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">Product Name</h3>
            <p className="text-gray-500 text-sm mt-1">$19.99</p>
            <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
}
