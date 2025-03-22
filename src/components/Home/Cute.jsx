import cute from '/images/home/cute.png'
import { LuArrowUpRight } from 'react-icons/lu'
import { motion } from 'framer-motion'

function Cute() {
    return (
        <div className='grid grid-cols-1 h-fit md:h-screen w-full bg-white'>
            <div className='md:my-auto my-4 grid md:grid-cols-2 mx-4 md:mx-20'>
                <div className='space-y-4 my-auto order-2 md:order-none'>
                    <div>
                        <h1 className='text-xl md:text-2xl'
                            style={{ textAlign: "justify" }}
                        >
                            Temukan kebutuhan packaging untuk berbagai industri di Parcelinpack. Buat kemasan menarik, dan tingkatkan value bisnismu.</h1>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-2 md:p-4 bg-gradient-to-r from-orange-400 to-orange-600 shadow-md w-fit rounded-full md:order-none order-1">
                        <a className='flex' href="/service">
                            <h1 className="text-white hover:underline transition-all duration-100 delay-100 text-center md:text-xl px-3 md:px-6 font-bold">
                                Lihat Produk
                            </h1>
                            <LuArrowUpRight className="text-white my-auto" size={24} />
                        </a>
                    </motion.div>
                </div>
                <div>
                    <img src={cute} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Cute