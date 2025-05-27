export default function ProductModel({ selectedProduct, onClose }) {
    if (!selectedProduct) return null; // so it won't render until there is a product clicked in the other file.

    return (
        <div className="fixed inset-0 bg-[#000000bd] flex items-center justify-center z-50" >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ✕
                </button>

                <img
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-full h-60 object-cover rounded mb-4 mt-4"
                />
                <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-700 mb-2">
                    Price: ${selectedProduct.price.toFixed(2)}
                </p>
                <p className="text-gray-600">Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat.</p>

                <button className="mt-10 bg-orange-600 p-4 text-white rounded">Add to Cart</button>
            </div>
        </div>
    );
}
