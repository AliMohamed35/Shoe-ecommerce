import About from "../src/components/About"
import Customers from "../src/components/Customers"
import MostSearch from "../src/components/MostSearch"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
    return (
        <>
            <section className="pt-[3rem] h-[500px] sm:h-[800px] bg-[url('/recycled-shoe-store-hero-image-bg.jpg')] bg-no-repeat bg-center">
                <div className="max-w-[1300px] mx-auto h-full px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white text-5xl sm:text-7xl lg:text-9xl mt-[3rem] text-center sm:text-left font-mono"
                    >
                        New <br /> Collections
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-white text-lg sm:text-xl sm:text-left text-center mt-6 max-w-2xl leading-relaxed"
                    >
                        Step into sustainable fashion with our eco-conscious footwear collection.
                        Each pair is crafted from recycled materials, combining style with environmental responsibility.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-9 flex flex-col sm:flex-row gap-4 sm:gap-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-white hover:bg-[#6e7051] px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-[1.2rem] bg-white text-black transition w-full sm:w-auto rounded-lg shadow-lg"
                        >
                            Shop Men
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-white hover:bg-[#6e7051] px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-[1.2rem] bg-white text-black transition w-full sm:w-auto rounded-lg shadow-lg"
                        >
                            Shop Women
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <MostSearch />
            <About />

            <section className="grid grid-cols-1 sm:grid-cols-2 p-4 sm:p-10 gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[url(/thumbnail1.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10"
                    >
                        Men
                    </motion.h2>
                    <Link to={'/formen'}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
                            whileTap={{ scale: 0.95 }}
                            className="text-base sm:text-xl bg-black text-white px-4 sm:px-6 py-2 sm:py-4 border-2 border-white rounded-lg transition-colors"
                        >
                            Shop for Men
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div

                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[url(/thumbnail2.jpg)] bg-cover bg-no-repeat flex flex-col justify-center items-center text-white h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10"
                    >
                        Women
                    </motion.h2>
                    <Link to={'/forwomen'}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
                            whileTap={{ scale: 0.95 }}
                            className="text-base sm:text-xl bg-black text-white px-4 sm:px-6 py-2 sm:py-4 border-2 border-white rounded-lg transition-colors"
                        >
                            Shop for Women
                        </motion.button>
                    </Link>
                </motion.div>
            </section>

            <Customers />
        </>
    )
}

export default Home
