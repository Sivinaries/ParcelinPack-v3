import pack from "../../assets/images/pack/pack.png"

function Parcel() {
  return (
    <div className="relative grid grid-cols-1 h-fit bg-white md:px-16">
      <div className="my-0 md:my-10 space-y-3 md:space-y-6">
        <h1 className="ps-2 md:ps-6 text-4xl md:text-5xl font-light text-gray-300">
          Creative Packaging Company
        </h1>
      </div>
      <div className="grid grid-cols-1">
        <div className="text-[90px] md:text-[260px] tracking-widest leading-none md:leading-[180px]">
          Parcelin
        </div>
        <div className="grid grid-cols-2">
          <div className="p-0 col-span-1 text-[90px] md:text-[260px] tracking-wider md:tracking-widest leading-[60px] md:leading-none">Pack</div>
          <div className="col-span-1 text-xs md:text-lg flex items-center px-4 md:p-20">
            Kami menyediakan solusi kemasan berkualitas tinggi yang dipadukan
            dengan kreativitas, membantu produk Anda tampil stand out di pasar
            yang kompetitif.
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-end md:items-center justify-center">
        <img
          src={pack}
          alt="Parcel"
          className="max-w-[40%] md:max-w-[80%] max-h-[40%] md:max-h-[80%] object-contain z-0 -ml-44 mb-8 md:-mb-24 md:-ml-[400px]"
        />
      </div>
    </div>
  );
}

export default Parcel;
