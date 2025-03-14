import background from "../../assets/images/story/background.png";
import cute from '../../assets/images/cute.png'

function Story() {
  return (
    <div className="flex items-center bg-white my-4 md:my-20 mx-auto">
      <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
        <div className="md:w-1/2 space-y-4 flex flex-col justify-center p-4 md:p-10">
        <div className="order-2 md:order-none">
          <h1 className="text-6xl lg:text-7xl md:text-8xl font-base">Cerita</h1>
          <h1 className="text-6xl lg:text-7xl md:text-8xl font-base">Parcelin</h1>
          </div>
          <div className="order-3 space-y-4 md:order-none">
          <p className="text-base lg:text-xl md:text-2xl leading-relaxed">
            PT Parcelin Creative Indonesia, atau yang lebih dikenal sebagai
            Parcelinpack, adalah perusahaan packaging yang melayani bisnis lokal
            maupun internasional, mulai dari UMKM hingga perusahaan
            multinasional di berbagai industri.
          </p>
          <p className="text-base lg:text-xl md:text-2xl leading-relaxed">
            Kami menyediakan solusi kemasan berkualitas tinggi yang dipadukan
            dengan kreativitas, membantu produk Anda tampil stand out di pasar
            yang kompetitif. Lebih dari sekadar penyedia layanan, kami
            berkomitmen menjadi mitra profesional yang terpercaya dan peduli,
            selalu siap bekerja bersama Anda.
          </p>
          <p className="text-base lg:text-xl md:text-2xl leading-relaxed">
            Bersama, kami hadir untuk memberikan solusi yang tak hanya menjawab
            kebutuhan, tetapi juga melampaui ekspektasi Anda.
          </p>
          </div>
        </div>

        <div className="md:w-1/2 md:flex items-center justify-center relative">
          <img
            src={background}
            alt="Cerita Parcelin"
            className="w-full h-full object-cover shadow-md"
            style={{
              WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1))",
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 10))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
