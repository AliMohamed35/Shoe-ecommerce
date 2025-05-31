import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ProductModel from "../src/components/ProductModel";
import { useScrollToTop } from "../src/hooks/useScrollToTop";
import DividerInShop from "../src/components/DividerInShop";
import { motion } from "framer-motion";
import { useDebounce } from 'use-debounce';

export default function Forwomen() {
    useScrollToTop();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [debouncedText] = useDebounce(searchTerm, 1000);

    const searchHandle = (e) => {
        setSearchTerm(e);
    }

    let dummy2 = [
        {
            id: 1,
            name: 'shoes 1',
            price: 50.00,
            statue: 'sale',
            img: "/womens.jpg",
        },
        {
            id: 2,
            name: 'shoes 1',
            price: 50.00,
            statue: 'sale',
            img: "/womens.jpg",
        },
        {
            id: 3,
            name: 'shoes 1',
            price: 50.00,
            statue: 'no',
            img: "/womens.jpg",
        },
        {
            id: 4,
            name: 'shoes 1',
            price: 50.00,
            statue: 'sale',
            img: "/womens.jpg",
        },
        {
            id: 5,
            name: 'shoes 1',
            price: 50.00,
            statue: 'sale',
            img: "/womens.jpg",
        },
        {
            id: 6,
            name: 'shoes 1',
            price: 50.00,
            statue: 'no',
            img: "/womens.jpg",
        },
    ]

    const filteredProducts = dummy2.filter((item) => item.name.toLowerCase().includes(debouncedText.toLowerCase()))
    return (
        <>
            <section className="bg-gradient-to-b from-[#ebebd3] to-white min-h-screen">
                <div className="max-w-[1300px] mx-auto pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pt-8 sm:pt-12 p-4"
                    >
                        <h1 className="text-4xl font-mono border-b-2 border-orange-400 pb-2 text-[#2c2c2c]">Shop For Women</h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mt-6 p-4"
                    >
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ml-2">
                            <SearchIcon className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            onChange={(e) => searchHandle(e.target.value)}
                            placeholder='Search for products...'
                            className="w-full pl-12 p-3 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:border-[#6e7051] focus:ring-2 focus:ring-[#6e7051]/20 transition-all duration-300 shadow-sm"
                        />
                    </motion.div>

                    <div className="mt-12 p-4">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((item, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    key={item.id}
                                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                >
                                    <div className="relative overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-[350px] sm:h-[400px] object-cover"
                                        />
                                        {item.statue.includes('sale') && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute top-4 right-4 w-14 h-14 rounded-full bg-[#6e7051] text-white flex items-center justify-center text-sm font-bold shadow-lg transform rotate-12"
                                            >
                                                Sale
                                            </motion.div>
                                        )}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedProduct(item)}
                                                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-[#6e7051] px-8 py-3 rounded-full font-semibold hover:bg-[#6e7051] hover:text-white cursor-pointer shadow-lg"
                                            >
                                                View Details
                                            </motion.button>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <motion.h3
                                            whileHover={{ scale: 1.02 }}
                                            className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2"
                                        >
                                            {item.name}
                                        </motion.h3>

                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-[#6e7051]">
                                                ${item.price.toFixed(2)}
                                            </span>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-6 py-3 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transform transition-all duration-300 shadow-md"
                                            >
                                                Add To Cart
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </ul>

                        {filteredProducts.length === 0 && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center mt-12 text-gray-600 text-lg"
                            >
                                No products match your search.
                            </motion.p>
                        )}

                        <ProductModel selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
                    </div>
                </div>
            </section>
            <DividerInShop />
        </>
    )
}