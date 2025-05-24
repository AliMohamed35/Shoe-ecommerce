import image1 from "../assets/women's green.jpg"


function MostSearch() {
    const dummy = [
        {
            img: "/src/assets/women's green.jpg",
            id: 1,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'sale'
        },
        {
            img: "/src/assets/women's green.jpg",
            id: 2,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'sale'
        },
        {
            img: "/src/assets/women's green.jpg",
            id: 3,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/src/assets/women's green.jpg",
            id: 4,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/src/assets/women's green.jpg",
            id: 5,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
        {
            img: "/src/assets/women's green.jpg",
            id: 6,
            name: "Women's Green training",
            not_price: 64.90,
            price: 49.90,
            statue: 'no'
        },
    ]

    return (
        <section className="mt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1300px] mx-auto my-10 sm:my-20">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl sm:text-2xl border-amber-500 border-b-2">Our Best Seller</h3>
                </div>

                <div className="mt-8 sm:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {dummy.map((item) => (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={image1}
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

                                    <div className="flex items-center gap-3 text-gray-600">
                                        <span className="text-sm line-through">
                                            ${item.not_price.toFixed(2)}
                                        </span>
                                        <span className="text-lg font-bold text-[#6e7051]">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostSearch
