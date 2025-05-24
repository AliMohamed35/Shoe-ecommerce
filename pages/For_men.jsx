import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ProductModel from "../src/components/ProductModel";

export default function Formen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const searchHandle = (e) => {
        setSearchTerm(e);
    }

    let dummy2 = [
        {
            id: 1,
            name: 'shoes 1',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
        {
            id: 2,
            name: 'shoes 2',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
        {
            id: 3,
            name: 'shoes 3',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
        {
            id: 4,
            name: 'shoes 4',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
        {
            id: 5,
            name: 'shoes 5',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
        {
            id: 6,
            name: 'shoes 6',
            price: 50.00,
            statue: 'sale',
            img: "/src/assets/women's green.jpg",
        },
    ]

    const filteredProducts = dummy2.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <>
            <section className=" bg-[#ebebd3]">
                <div className="max-w-[1300px] mx-auto pb-10">
                    <div className="pt-4 sm:pt-8 p-2">
                        <h1 className="text-3xl font-mono border-b-2 border-orange-400">Shop For Men</h1>
                    </div>

                    <div className="relative mt-3 p-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-2">
                            <SearchIcon className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            onChange={(e) => searchHandle(e.target.value)}
                            placeholder='Search for products...'
                            className="w-full pl-10 p-2 bg-white border-2 border-gray-300 rounded-4xl focus:outline-none focus:border-[#6e7051] transition-colors"
                        />
                    </div>

                    <div className="mt-10 p-3">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {filteredProducts.map((item) => (
                                <div
                                    onClick={() => setSelectedProduct(item)}
                                    key={item.id}
                                    className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-full h-[300px] sm:h-[350px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {item.statue.includes('sale') && (
                                            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#6e7051] text-white flex items-center justify-center text-sm font-semibold">
                                                Sale
                                            </div>
                                        )}
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-gray-500/30 transition-all duration-300 flex items-center justify-center">
                                            <button
                                                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-[#6e7051] px-6 py-2 rounded-full font-semibold hover:bg-[#6e7051] hover:text-white cursor-pointer"
                                            >
                                                Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                                            {item.name}
                                        </h3>

                                        <div className="flex items-center gap-3 text-gray-600 justify-between">
                                            {/* <span className="text-sm line-through">
                                            ${item.not_price.toFixed(2)}
                                        </span> */}
                                            <span className="text-lg font-bold text-[#6e7051]">
                                                ${item.price.toFixed(2)}
                                            </span>

                                            <button className="p-3 bg-orange-500 text-white rounded cursor-pointer hover:bg-orange-800">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>

                        {filteredProducts.length === 0 && (
                            <p className="text-center mt-8 text-gray-500">No products match your search.</p>
                        )}

                        <ProductModel selectedProduct={selectedProduct} onClose={() => setSelectedProduct(null)} />

                    </div>
                </div>
            </section>
        </>
    )
}