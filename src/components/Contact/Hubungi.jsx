/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const InputField = ({ label, name, type = "text", value, onChange }) => (
    <div className="space-y-1">
        <label htmlFor={name} className="font-medium text-gray-700">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="rounded-lg border p-3 border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 shadow-sm"
            required
            placeholder={`Masukkan ${label.toLowerCase()}...`}
        />
    </div>
);

function Hubungi() {
    const [formData, setFormData] = useState({ nama: "", noHp: "", email: "", message: "" });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:hello@parcelinpack.id?subject=Konsultasi Packaging&body=Nama: ${formData.nama}%0D%0ANo Hp: ${formData.noHp}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="grid grid-cols-1 h-full bg-white w-full">
            <div className="my-4 md:my-20 space-y-6 md:space-y-12">
                <div className="mx-4 md:mx-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {/* FORM */}
                        <div className="bg-white p-6 md:p-8 rounded-3xl space-y-3 md:space-y-6 shadow-xl border border-gray-200">
                            <h1 className="text-3xl font-bold text-orange-600">Hubungi Kami</h1>
                            <h2 className="text-lg font-medium text-gray-500">Konsultasikan Packaging Anda</h2>
                            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                                <InputField label="Nama" name="nama" value={formData.nama} onChange={handleChange} />
                                <InputField label="No HP" name="noHp" value={formData.noHp} onChange={handleChange} />
                                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                                <div>
                                    <label htmlFor="message" className="font-medium text-gray-700">Pesan</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="rounded-md border p-2 md:p-4 border-gray-300 w-full h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 shadow-sm"
                                        required
                                        placeholder="Tulis pesan Anda..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    type="submit" className="w-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-md text-white p-2 md:p-4 rounded-full font-semibold hover:underline transition duration-300 text-xl md:text-2xl">
                                    Kirim Email
                                </motion.button>
                            </form>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="space-y-4 md:space-y-6 my-auto">
                            <div className="grid grid-cols-2 gap-2 md:gap-6 text-center">
                                {[
                                    { icon: FaWhatsapp, title: "Whatsapp", link: "https://warotator.parcelinpack.id/organik-website-5", contact: ["+62 819-4002-020", "+62 822-2500-7380"] },
                                    { icon: SiGmail, title: "Email", link: "mailto:hello@parcelinpack.id", contact: ["hello@parcelinpack.id"] },
                                    { icon: FaInstagram, title: "Instagram", link: "https://www.instagram.com/parcelinpack/", contact: ["@parcelinpack", "@parcelinpremium"] },
                                    { icon: FaTiktok, title: "Tiktok", link: "https://www.tiktok.com/@parcelincompany", contact: ["@parcelincompany"] },
                                ].map(({ icon: Icon, title, link, contact }, idx) => (
                                    <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="group block p-3 md:p-6 rounded-3xl shadow-md bg-white border border-gray-200 hover:bg-orange-50 transition duration-300">
                                        <Icon className="w-7 md:w-14 h-7 md:h-14 mx-auto text-orange-600 group-hover:text-orange-800 transition duration-300" />
                                        <h3 className="text-sm md:text-lg font-semibold mt-2 md:mt-3 text-gray-700">{title}</h3>
                                        {contact.map((c, i) => (
                                            <p key={i} className="text-sm md:text-lg text-gray-500">{c}</p>
                                        ))}
                                    </a>
                                ))}
                            </div>

                            {/* GOOGLE MAPS */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6411938312243!2d110.4617952!3d-6.999672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708da6adba10df%3A0xc2a5d98408735972!2sPT.%20Parcelin%20Creative%20Indonesia%20(ParcelinPack%20Office)!5e0!3m2!1sen!2sid!4v1709020000000"
                                className="w-full h-64 rounded-3xl shadow-md border border-gray-200"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hubungi;