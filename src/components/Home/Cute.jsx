import cute from '/images/home/cute.png'
import { LuArrowUpRight } from 'react-icons/lu'

function Cute() {
    return (
        <div className='grid grid-cols-1 h-fit md:h-screen w-full bg-white'>
            <div className="mx-4 md:mx-20">
                <div className='md:my-auto my-4 grid md:grid-cols-2'>
                    <div className='md:w-5/6 md:mx-auto space-y-4 my-auto order-2 md:order-none'>
                        <div>
                            <h1 className='text-xl md:text-2xl'
                                style={{ textAlign: "justify" }}
                            >
                                Temukan kebutuhan packaging untuk berbagai industri di Parcelinpack. Buat kemasan menarik, dan tingkatkan value bisnismu.</h1>
                        </div>
                        <div className="p-2 bg-orange-500 w-fit rounded-full md:order-none order-1">
                            <a className='flex' href="/service">
                                <h1 className="text-white hover:underline transition-all duration-100 delay-100 text-center md:text-xl px-2 md:px-4 font-bold">
                                    Lihat Produk
                                </h1>
                                <LuArrowUpRight className="text-white my-auto" size={24} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={cute} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cute