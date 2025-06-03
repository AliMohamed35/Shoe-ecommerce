import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../src/store/cartSlice';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../src/hooks/useScrollToTop';

export default function Cart() {
    useScrollToTop();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const handleAddToCart = (item) => {
        dispatch(cartActions.addToCart(item));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(cartActions.removeFromCart(id));
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#ebebd3] to-white py-6 sm:py-12">
            <div className="max-w-[1300px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 sm:mb-8"
                >
                    <h1 className="text-3xl sm:text-4xl font-mono border-b-2 border-orange-400 pb-2 text-[#2c2c2c]">
                        Shopping Cart
                    </h1>
                </motion.div>

                {cartItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 sm:py-12"
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="px-6 sm:px-8 py-2 sm:py-3 bg-[#6e7051] text-white rounded-full hover:bg-[#5a5c43] transition-colors"
                        >
                            Continue Shopping
                        </motion.button>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                                <div className="space-y-4 sm:space-y-6">
                                    {cartItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 border-b pb-4 sm:pb-6 last:border-b-0"
                                        >
                                            <div className="relative w-full sm:w-24 h-48 sm:h-24 flex-shrink-0">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-grow w-full">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                                                    <div className="flex-grow">
                                                        <h3 className="text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-[#6e7051] font-bold mb-2">
                                                            ${item.price.toFixed(2)}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between sm:justify-end gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => handleRemoveFromCart(item.id)}
                                                                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                                                            >
                                                                -
                                                            </motion.button>
                                                            <span className="w-8 text-center">{item.quantity}</span>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => handleAddToCart(item)}
                                                                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                                                            >
                                                                +
                                                            </motion.button>
                                                        </div>
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => handleRemoveFromCart(item.id)}
                                                            className="text-red-500 hover:text-red-600"
                                                        >
                                                            Remove
                                                        </motion.button>
                                                    </div>
                                                </div>
                                                <div className="mt-2 sm:hidden">
                                                    <p className="text-lg font-bold text-[#6e7051]">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:block text-right">
                                                <p className="text-lg font-bold text-[#6e7051]">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-6">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Order Summary</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Items:</span>
                                        <span className="font-semibold">{totalQuantity}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal:</span>
                                        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping:</span>
                                        <span className="font-semibold">Free</span>
                                    </div>
                                    <div className="border-t pt-3 sm:pt-4">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-bold">Total:</span>
                                            <span className="text-lg font-bold text-[#6e7051]">
                                                ${totalAmount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-2 sm:py-3 bg-[#6e7051] text-white rounded-full hover:bg-[#5a5c43] transition-colors"
                                    >
                                        Proceed to Checkout
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => dispatch(cartActions.clearCart())}
                                        className="w-full py-2 sm:py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        Clear Cart
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => navigate('/')}
                                        className="w-full py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        Continue Shopping
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}