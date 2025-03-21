import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Hubungi() {
    const [formData, setFormData] = useState({
        nama: "",
        noHp: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:hello@parcelinpack.id?subject=Konsultasi Packaging&body=Nama: ${formData.nama}%0D%0ANo Hp: ${formData.noHp}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="grid grid-cols-1 h-full bg-white p-2">
            <div className="my-4 md:my-14 mx-4 md:mx-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gray-100 p-4 rounded-xl space-y-2 my-auto h-fit">
                        <h1 className="text-2xl md:text-2xl font-extralight">Hubungi Kami</h1>
                        <h1 className="text-2xl md:text-4xl font-light">Konsultasikan Packaging Anda</h1>
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div>
                                <label htmlFor="nama">Nama</label>
                                <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="rounded-md border p-2 border-black w-full" required />
                            </div>
                            <div>
                                <label htmlFor="noHp">No Hp</label>
                                <input type="text" name="noHp" value={formData.noHp} onChange={handleChange} className="rounded-md border p-2 border-black w-full" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="rounded-md border p-2 border-black w-full" required />
                            </div>
                            <div>
                                <label htmlFor="message">Messages</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} className="rounded-md border p-2 border-black w-full h-44" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Kirim Email</button>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <a href="https://warotator.parcelinpack.id/organik-website-5" className="mx-auto text-center">
                                <FaWhatsapp className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                <h1 className="text-lg md:text-2xl font-extrabold">Whatsapp</h1>
                                <p className="text-base md:text-xl font-light">+62 819-4002-020</p>
                                <p className="text-base md:text-xl font-light">+62 822-2500-7380</p>
                            </a>
                            <a href="mailto:hello@parcelinpack.id" className="mx-auto text-center">
                                <SiGmail className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                <h1 className="text-lg md:text-2xl font-extrabold">Email</h1>
                                <p className="text-base md:text-xl font-light">hello@parcelinpack.id</p>
                            </a>
                            <a href="https://www.instagram.com/parcelinpack/" className="mx-auto text-center">
                                <FaInstagram className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                <h1 className="text-lg md:text-2xl font-extrabold">Instagram</h1>
                                <p className="text-base md:text-xl font-light">@parcelinpack</p>
                                <p className="text-base md:text-xl font-light">@parcelinpremium</p>
                            </a>
                            <a href="https://www.tiktok.com/@parcelincompany" className="mx-auto text-center">
                                <FaTiktok className="w-10 md:w-14 h-10 md:h-14 mx-auto" />
                                <h1 className="text-lg md:text-2xl font-extrabold">Tiktok</h1>
                                <p className="text-base md:text-xl font-light">@parcelincompany</p>
                            </a>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6411938312243!2d110.4617952!3d-6.999672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708da6adba10df%3A0xc2a5d98408735972!2sPT.%20Parcelin%20Creative%20Indonesia%20(ParcelinPack%20Office)!5e0!3m2!1sen!2sid!4v1709020000000" width="400" height="200" className="w-full rounded-xl" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hubungi;
