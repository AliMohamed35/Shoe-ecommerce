import ProductModel from "./ProductModel"
import { useState } from "react"
import { motion } from 'framer-motion';

function MostSearch() {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const dummy = [
        {
            img: "/best1.jpg",
            id: 1,
            name: "Mens' Classic Mint",
            not_price: 64.90,
            price: 49.90,
            statue: 'sale'
        },
        {
            img: "/best2.jpg",
            id: 2,
            name: "Women's Orange Sneaker",
            not_price: 64.90,
            price: 49.90,
            statue: 'sale'
        },
        {
            img: "/best3.jpg",
            id: 3,
            name: "Women's Cream Suede",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/best4.jpg",
            id: 4,
            name: "Women's Mint Sneaker",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/best5.jpg",
            id: 5,
            name: "Women's Choco City Run",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/best6.jpg",
            id: 6,
            name: "Men's Moonstone Sneaker",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="mt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="max-w-[1300px] mx-auto my-10 sm:my-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-4 border-amber-500 pb-2">Our Best Seller</h3>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {dummy.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
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
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg line-through text-gray-400">
                                                ${item.not_price.toFixed(2)}
                                            </span>
                                            <span className="text-2xl font-bold text-[#6e7051]">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>

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
                    </div>
                </motion.div>
            </div>

            <ProductModel selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </section>
    )
}

export default MostSearch
