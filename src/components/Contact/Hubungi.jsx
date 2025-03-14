import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Hubungi() {
    return (
        <div className="grid grid-cols-1 h-full bg-white p-2">
            <div className="my-4 md:my-14 mx-4 md:mx-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gray-100 p-4 rounded-xl space-y-2 my-auto h-fit">
                        <div>
                            <h1 className="text-2xl md:text-2xl font-extralight">Hubungi Kami</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-light">Konsultasikan</h1>
                            <h1 className="text-2xl md:text-4xl font-light">Packaging Anda</h1>
                        </div>
                        <div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Nama</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>No Hp</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Email</h1>
                                </label>
                                <input type="text"
                                    className="rounded-md border p-2 border-black w-full"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="nama">
                                    <h1>Messages</h1>
                                </label>
                                <textarea
                                    className="rounded-md border p-2 border-black w-full h-44"
                                    name="" id="">

                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <a href="https://warotator.parcelinpack.id/organik-website-5">
                                <div className="mx-auto">
                                    <div className="">
                                        <FaWhatsapp className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                    </div>
                                    <div className="text-center space-y-2">
                                        <h1 className="text-lg md:text-2xl font-extrabold font-sans">
                                            Whatsapp
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            +62 819-4002-020
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            +62 822-2500-7380
                                        </h1>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="mx-auto">
                                    <div className="">
                                        <SiGmail className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                    </div>
                                    <div className="text-center space-y-2">
                                        <h1 className="text-lg md:text-2xl font-extrabold font-sans">
                                            Email
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            hello@parcelinpack.id
                                        </h1>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/parcelinpack/">
                                <div className="mx-auto">
                                    <div className="">
                                        <FaInstagram className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                    </div>
                                    <div className="text-center">
                                        <h1 className="text-lg md:text-2xl font-extrabold font-sans">
                                            Instagram
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            @parcelinpack
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            @parcelinpremium
                                        </h1>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.tiktok.com/@parcelincompany">
                                <div className="mx-auto">
                                    <div className="">
                                        <FaTiktok className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                    </div>
                                    <div className="text-center">
                                        <h1 className="text-lg md:text-2xl font-extrabold font-sans">
                                            Tiktok
                                        </h1>
                                        <h1 className="text-base md:text-xl font-light font-sans">
                                            @parcelincompany
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="rounded-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6411938312243!2d110.4617952!3d-6.999672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708da6adba10df%3A0xc2a5d98408735972!2sPT.%20Parcelin%20Creative%20Indonesia%20(ParcelinPack%20Office)!5e0!3m2!1sen!2sid!4v1709020000000"
                                width="400"
                                height="200"
                                style={{ border: "0" }}
                                allowfullscreen="1"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full rounded-xl">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hubungi