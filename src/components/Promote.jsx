import PropTypes from 'prop-types';
import icon from "../assets/images/promote/icon.png";
import { useNavigate } from 'react-router-dom';

function Section({ children, className }) {

  return (
    <div className={`relative bg-[#AB6029] ${className}`}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default function Promote() {

  const navigate = useNavigate();

  return (
    <div className="relative grid place-items-center h-full w-full px-4 my-8">
      <div className="hidden md:grid relative w-full grid-cols-5">
        <img src={"/images/promote/bg-vector.png"} alt="Wood Texture" className="absolute h-full object-fill w-full z-10" />
        <Section className="rounded-l-xl" />
        <Section className="col-span-3 flex items-center justify-center text-center">
          <div className="space-y-4 py-6">
            <h1 className="text-4xl text-white font-medium">
              Tunggu apalagi, Yuk hubungi kami sekarang!
            </h1>
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#FD9F59] text-2xl text-white font-extrabold rounded-full p-4 w-1/3 relative z-40">
              Hubungi Kami
            </button>
          </div>
        </Section>
        <Section className="rounded-r-xl">
          <div className="flex items-center justify-center relative">
            <img
              src={icon}
              alt="Box icon"
              className="absolute md:-bottom-48 md:-left-6 lg:-bottom-40 lg:-left-10 w-64 h-64 object-cover z-20"
            />
          </div>
        </Section>
      </div>

      <div className="block md:hidden relative w-full">
        <img src={"/images/promote/bg-vector.png"} alt="Wood Texture" className="absolute h-full object-fill w-full z-10" />
        <Section className="rounded-xl flex flex-col items-center text-center py-10">
          <h1 className="text-2xl text-white font-bold">
            Tunggu apalagi, Yuk hubungi
          </h1>
          <h1 className="text-2xl text-white font-bold">
            kami sekarang!
          </h1>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#FD9F59] text-xl text-white font-extrabold rounded-full p-2.5 mt-4 w-1/2 relative z-40">
            Hubungi Kami
          </button>
        </Section>
      </div>
    </div>
  );
}
