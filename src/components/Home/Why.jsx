import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Why() {
  const services = [
    {
      text: "Minimal Order Rendah",
      description:
        "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
    },
    {
      text: "Produksi Express",
      description:
        "Kami menghadirkan layanan Produksi Express untuk memastikan kebutuhan packaging Anda terpenuhi dengan cepat tanpa mengorbankan kualitas. Dengan proses produksi yang efisien, teknologi canggih, dan tim berpengalaman, kami siap membantu bisnis Anda mendapatkan packaging premium dalam waktu singkat, sehingga bisnis atau campaign Anda tetap berjalan lancar tanpa hambatan.",
    },
    {
      text: "Budget Fleksibel",
      description:
        "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
    },
    {
      text: "Professional",
      description:
        "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
    },
    {
      text: "Variatif",
      description:
        "Parcelinpack menghadirkan berbagai pilihan kemasan yang fleksibel dan dapat disesuaikan dengan kebutuhan setiap bisnis, mulai dari bentuk, bahan, hingga desain, memastikan solusi kemasan terbaik yang sesuai dengan karakter produk Anda.",
    },
    {
      text: "Kreatif",
      description:
        "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
    },
  ];

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    updateScrollbarThumb();
  }, []);

  const updateScrollbarThumb = () => {
    const container = scrollContainerRef.current;
    const scrollbar = scrollbarRef.current;
    if (!container || !scrollbar) return;

    const scrollPercentage =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
      100;
    const thumbWidth = (container.clientWidth / container.scrollWidth) * 100;
    const thumbPosition = (scrollPercentage * (100 - thumbWidth)) / 100;

    scrollbar.style.setProperty("--thumb-width", `${thumbWidth}%`);
    scrollbar.style.setProperty("--thumb-position", `${thumbPosition}%`);

    setIsAtStart(container.scrollLeft === 0);
    setIsAtEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth
    );
  };

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 350;
      const newScrollPosition =
        direction === "left"
          ? scrollContainer.scrollLeft - scrollAmount
          : scrollContainer.scrollLeft + scrollAmount;

      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setTimeout(updateScrollbarThumb, 300);
    }
  };

  return (
    <div className="bg-white py-10 md:py-20 mx-4 md:mx-16 relative">
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-light text-black">
          Kenapa Parcelinpack
        </h1>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 md:space-x-4 mx-auto max-w-full pb-4 scrollbar-hide"
        onScroll={updateScrollbarThumb}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-1/4 snap-center space-y-4 py-4 bg-gray-100 rounded-2xl overflow-hidden"
          >
            <div className="h-48">
              <img
                src={`/images/why/why${index + 1}.png`}
                alt={service.text}
                className="w-28 h-28 object-contain p-4"
              />
              <h2 className="px-4 text-4xl font-medium">{service.text}</h2>
            </div>
            <p className="px-4 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={scrollbarRef}
        className="custom-scrollbar mt-4 mx-auto w-40 h-3 bg-gray-200 rounded-full relative"
      >
        <div
          className="custom-scrollbar-thumb absolute top-0 h-full bg-gray-400 rounded-full"
          style={{
            width: "var(--thumb-width, 20%)",
            left: "var(--thumb-position, 0%)",
          }}
        />
      </div>

      {!isAtStart && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 p-2 md:p-4 rounded-full shadow-md hover:bg-black/40 transition-colors"
        >
          <FaArrowLeft color="white" />
        </button>
      )}

      {!isAtEnd && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 p-2 md:p-4 rounded-full shadow-md hover:bg-black/40 transition-colors"
        >
          <FaArrowRight color="white" />
        </button>
      )}
    </div>
  );
}
