import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 relative overflow-hidden">
      <div
        className="absolute w-full h-full md:-left-10 md:-bottom-20 bg-no-repeat opacity-50 pointer-events-none"
        style={{
          backgroundImage: "url(/images/logo.png)",
          backgroundPosition: "bottom left",
          backgroundSize: "contain",
        }}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 md:justify-items-center ps-6 md:ps-0 my-2 gap-y-6">
        <div className="col-span-1 md:col-span-4 space-y-4">
          <h6 className="font-bold">PT Parcelin Creative Indonesia</h6>
          <p className="text-sm">
            ©️ 2025 Parcelin Creative. All rights reserved
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-6">
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Perusahaan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/about">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/service">
                  Produk
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/portfolio">
                  Portofolio
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Layanan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/service">
                  Kemasan Produk
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/service">
                  Hampers & Corporate gift
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/service">
                  Merchandise
                </a>
              </li>
              <li>
                <a
                  className="hover:underline hover:text-white delay-100 transition-all"
                  href="/service">
                  PR Packaging
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Bantuan</h6>
            <ul className="text-sm space-y-2 text-slate-400">
              <li>
                <Link
                  className="hover:underline hover:text-white delay-100 transition-all"
                  to={"/"}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-white delay-100 transition-all"
                  to={"/"}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-white delay-100 transition-all"
                  to={"/"}>
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-white delay-100 transition-all"
                  to={"/"}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline hover:text-white delay-100 transition-all"
                  to={"/"}>
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h6 className="font-bold">Ikuti Kami</h6>
            <div className='flex gap-4 xl:gap-8'>
              <a href="https://www.instagram.com/parcelinpack/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-white w-8 h-8' />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='text-white w-8 h-8' />
              </a>
              <a href="https://www.tiktok.com/@parcelincompany" target="_blank" rel="noopener noreferrer">
                <FaTiktok className='text-white w-8 h-8' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;