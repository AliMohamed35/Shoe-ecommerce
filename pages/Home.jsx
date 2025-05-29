import About from "../src/components/About"
import Customers from "../src/components/Customers"
import MostSearch from "../src/components/MostSearch"
import { Link } from 'react-router-dom';

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

            <MostSearch />
            <About />

            <section className="grid grid-cols-1 sm:grid-cols-2  p-4 sm:p-10 gap-4">
                <div className="bg-[url(/thumbnail1.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white h-[300px] sm:h-[400px] md:h-[500px]">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10">Men</h2>
                    <Link to={'/formen'}>
                        <button className="text-base sm:text-xl bg-black text-white px-4 sm:px-6 py-2 sm:py-4 border-2 border-white hover:bg-white hover:text-black transition-colors">Shop for Men</button>
                    </Link>
                </div>

                <div className="bg-[url(/thumbnail2.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white h-[300px] sm:h-[400px] md:h-[500px]">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10">Women</h2>
                    <Link to={'/forwomen'}>
                        <button className="text-base sm:text-xl bg-black text-white px-4 sm:px-6 py-2 sm:py-4 border-2 border-white hover:bg-white hover:text-black transition-colors">Shop for Women</button>
                    </Link>
                </div>
            </section>

            <Customers />
        </>
    )
}

export default Home
