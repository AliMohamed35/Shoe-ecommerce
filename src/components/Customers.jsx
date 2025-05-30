import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';

function Customers() {
    let dummyCards = [
        {
            id: 1,
            comment: '"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer"',
            avatar: '',
            name: 'JULIA KEYS',
            rating: 5
        },
        {
            id: 2,
            comment: '"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer"',
            avatar: '',
            name: 'LUIS ADRIAN',
            rating: 5
        },
        {
            id: 3,
            comment: '"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer"',
            avatar: '',
            name: 'MARIA ANNA',
            rating: 5
        },
        {
            id: 4,
            comment: '"Felis semper duis massa scelerisque ac amet porttitor ac tellus venenatis aliquam varius mauris integer"',
            avatar: '',
            name: 'MARIA ANNA',
            rating: 5
        }
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

    const cardVariants = {
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
        <section className="min-h-[600px] flex flex-col text-center my-16 justify-center items-center bg-gradient-to-b from-white to-gray-50 py-20">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl font-bold mb-16 text-gray-800"
            >
                Our customers speak for us
            </motion.h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {dummyCards.length === 0 ? (
                    <p className="text-gray-500">No Customers</p>
                ) : dummyCards.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                        <div className="flex gap-1 mb-6">
                            {[...Array(item.rating)].map((_, index) => (
                                <StarIcon key={index} className="text-yellow-400" />
                            ))}
                        </div>
                        <motion.h2
                            className="text-start text-lg mb-8 text-gray-700 leading-relaxed"
                            whileHover={{ scale: 1.02 }}
                        >
                            {item.comment}
                        </motion.h2>
                        <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center text-white font-bold">
                                {item.name.charAt(0)}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">Verified Customer</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Customers
