import { motion } from "framer-motion";

export default function ProductModel({ selectedProduct, onClose, onAddToCart }) {
    if (!selectedProduct) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        <div className="relative">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src={selectedProduct.img}
                                alt={selectedProduct.name}
                                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                            />
                            {selectedProduct.statue.includes('sale') && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#6e7051] text-white flex items-center justify-center text-sm font-bold shadow-lg transform rotate-12"
                                >
                                    Sale
                                </motion.div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    {selectedProduct.name}
                                </h2>
                                <p className="text-2xl font-bold text-[#6e7051]">
                                    ${selectedProduct.price.toFixed(2)}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Description</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Features</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-[#6e7051] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        High-quality materials
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-[#6e7051] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Comfortable fit
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-[#6e7051] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Durable construction
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onAddToCart(selectedProduct)}
                                    className="w-full py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
