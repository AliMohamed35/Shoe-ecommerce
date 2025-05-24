import About from "../src/components/About"
import MostSearch from "../src/components/MostSearch"

function Home() {
    return (
        <>
            <section className="pt-[3rem] h-[500px] sm:h-[800px] bg-[url('/recycled-shoe-store-hero-image-bg.jpg')] bg-no-repeat bg-center">
                <div className="max-w-[1300px] mx-auto h-full px-4 sm:px-6 lg:px-8">
                    <h1 className="text-white text-5xl sm:text-7xl lg:text-9xl mt-[3rem] text-center sm:text-left font-mono">New <br /> Collections</h1>

                    <p className="text-white text-lg sm:text-xl sm:text-left text-center mt-6 max-w-2xl leading-relaxed">
                        Step into sustainable fashion with our eco-conscious footwear collection.
                        Each pair is crafted from recycled materials, combining style with environmental responsibility.
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <button className="hover:text-white hover:bg-[#6e7051] px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-[1.2rem] bg-white text-black transition w-full sm:w-auto">Shop Men</button>
                        <button className="hover:text-white hover:bg-[#6e7051] px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-[1.2rem] bg-white text-black transition w-full sm:w-auto">Shop Women</button>
                    </div>
                </div>
            </section>

            <About />
            <MostSearch />
        </>
    )
}

export default Home
