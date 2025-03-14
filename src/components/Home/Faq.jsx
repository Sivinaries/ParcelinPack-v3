import { useState } from "react";
import { GoDash, GoPlus } from "react-icons/go";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Apakah bisa custom bentuk, model, dan desain?",
      answer:
        "Ya, kami menyediakan layanan custom desain, bentuk, dan model packaging sesuai kebutuhan bisnis Anda.",
    },
    {
      question: "Berapa minimal ordernya?",
      answer:
        "Minimal order: Hardbox 10 pcs, jenis kemasan lainnya rata-rata 50 pcs, minimal order quantity bergantung pada jenis produk, size, model serta desain.",
    },
    {
      question: "Apakah bisa dikirim ke seluruh Indonesia?",
      answer:
        "Ya, kami melayani pengiriman ke seluruh Indonesia, memastikan produk Anda tiba dengan aman dan tepat waktu.",
    },
    {
      question: "Apakah melayani konsultasi?",
      answer:
        "Ya, kami menyediakan konsultasi lengkap, mulai dari perencanaa, desain, pemilihan bahan, hingga produksi, untuk menciptakan kemasan berkualitas terbaik untuk produk Anda.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 h-full bg-white w-full md:mx-6">
      <div className="my-4 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 m-4 md:my-20 md:mx-10 md:space-x-8">
          <div className="flex items-center col-span-1">
            <div className="space-y-410">
              <h1 className="text-3xl md:text-4xl">
                Dapatkan Packaging Terbaik untuk Bisnismu!
              </h1>
              <p>
                Dapatkan packaging terbaik untuk bisnismu! Dengan desain menarik
                dan material berkualitas, packaging kami siap meningkatkan citra
                merek dan menarik perhatian pelanggan.
              </p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 my-4 md:my-0">
            {faqData.map((faq, index) => (
              <div key={index} className={`border-t border-gray-800`}>
                <button
                  className="w-full py-5 flex justify-between items-center hover:text-gray-700 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-bold text-left">{faq.question}</span>
                  <span className="ml-6">
                    {openIndex === index ? (
                      <GoDash />
                    ) : (
                      <GoPlus />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
