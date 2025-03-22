import { useState, useEffect, useRef } from "react";
import exp1 from "/images/exp/exp1.png";
import exp2 from "/images/exp/exp2.png";
import exp3 from "/images/exp/exp3.png";

function Exp() {
  const [yearsCount, setYearsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [productionCount, setProductionCount] = useState(0);
  const sectionRef = useRef(null);
  const animationTriggered = useRef(false);

  const startCountingAnimation = () => {
    if (animationTriggered.current) return;
    
    animationTriggered.current = true;

    // Durasi animasi
    const yearsDuration = 1500;
    const customersDuration = 2000;
    const productionDuration = 2500;

    // Animasi tahun
    const yearsIncrement = 7 / (yearsDuration / 16);
    let yearsCurrentCount = 0;
    const yearsTimer = setInterval(() => {
      yearsCurrentCount = Math.min(yearsCurrentCount + yearsIncrement, 7);
      setYearsCount(Math.ceil(yearsCurrentCount));
      if (yearsCurrentCount >= 7) clearInterval(yearsTimer);
    }, 16);

    // Animasi pelanggan
    const customersIncrement = 7500 / (customersDuration / 16);
    let customersCurrentCount = 0;
    const customersTimer = setInterval(() => {
      customersCurrentCount = Math.min(customersCurrentCount + customersIncrement, 7500);
      setCustomersCount(Math.floor(customersCurrentCount));
      if (customersCurrentCount >= 7500) clearInterval(customersTimer);
    }, 16);

    // Animasi produksi
    const productionIncrement = 10 / (productionDuration / 16);
    let productionCurrentCount = 0;
    const productionTimer = setInterval(() => {
      productionCurrentCount = Math.min(productionCurrentCount + productionIncrement, 10);
      setProductionCount(parseFloat(productionCurrentCount.toFixed(1)));
      if (productionCurrentCount >= 10) clearInterval(productionTimer);
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCountingAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatCustomers = (num) => num.toLocaleString();
  const formatProduction = (num) => (num === 10 ? "10 Juta" : `${num} Juta`);

  return (
    <div className="grid grid-cols-1 h-full bg-white w-full" ref={sectionRef}>
      <div className="my-4 md:my-40 space-y-8 md:space-y-12">
        <div className="mx-4 md:mx-20">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">
            <div className="w-full md:w-1/2">
              <div
                className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
                style={{ backgroundImage: `url(${exp1})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="z-10">
                  <p className="text-4xl md:text-8xl font-bold">{yearsCount}+</p>
                  <p className="text-2xl">Tahun</p>
                </div>
                <p className="z-10 text-xs md:text-sm">
                  Dengan pengalaman lebih dari 7 tahun, Parcelinpack hadir sebagai mitra terpercaya dalam menyediakan kemasan yang kreatif dan inovatif untuk meningkatkan nilai estetika produk dan memperkuat citra brand bisnis Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
                style={{ backgroundImage: `url(${exp2})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="z-10">
                  <p className="text-4xl md:text-8xl font-bold">{formatCustomers(customersCount)}+</p>
                  <p className="text-2xl">Total Pelanggan</p>
                </div>
                <p className="z-10 text-sm md:text-sm">
                  Dipercaya oleh lebih dari 7500 pelanggan setia. Parcelinpack menjadi pilihan utama untuk solusi packaging bagi UMKM hingga Brand-Brand besar Nasional. Kami senantiasa siap mendukung kesuksesan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-8">
            <div
              className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
              style={{ backgroundImage: `url(${exp3})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
              <div className="z-10">
                <p className="text-4xl md:text-8xl font-bold">{formatProduction(productionCount)}+</p>
                <p className="text-2xl">Total Produksi</p>
              </div>
              <p className="z-10 text-xs md:text-sm">
                Dengan total produksi lebih dari 10.000.000 packaging, Parcelinpack membuktikan dedikasi dalam menghadirkan kualitas dan inovasi yang mendukung kesuksesan bisnis Anda di berbagai sektor industri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
