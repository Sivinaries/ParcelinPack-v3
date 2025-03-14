import { useParams } from "react-router-dom";
import useSubProductById from "../../hooks/useSubProductById";
import MainSection from "../../components/Service/detail/MainSection";
import Advantage from "../../components/Service/detail/Advantage";
import formatToIDR from "../../utils/formatIDR";

export default function Detail() {
    const { idSubProduct } = useParams()
    const { subProduct, loading, error } = useSubProductById(idSubProduct)

    if (loading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!subProduct || subProduct.length === 0) {
        return <p className="text-center text-gray-500">Tidak ada product tersedia.</p>;
    }

    const advantages = [
        {
            desc: subProduct.subproduct.desc1,
            image: subProduct.subproduct.img1,
        },
        {
            desc: subProduct.subproduct.desc2,
            image: subProduct.subproduct.img2,
        },
        {
            desc: subProduct.subproduct.desc3,
            image: subProduct.subproduct.img3,
        }
    ]

    return (
        <div className="flex flex-col gap-y-10 px-4 md:pt-20 md:px-20">
            <MainSection
                name={subProduct.subproduct.subproduct}
                price={formatToIDR(subProduct.subproduct.price)}
                desc={subProduct.subproduct.desc1}
                minOrder={subProduct.subproduct.min}
                tags={[]}
                images={[subProduct.subproduct.img1, subProduct.subproduct.img2, subProduct.subproduct.img3]}
                path={[]}
            />

            {advantages.map((advantage, idx) => (
                <Advantage
                    key={idx}
                    image={advantage.image}
                    title={advantage.title}
                    desc={advantage.desc}
                    idx={idx}
                />
            ))}

            <div className="flex flex-col justify-center items-center gap-y-10 bg-gray-200 py-8">
                <h1 className="text-xl md:text-2xl">Temukan inspirasi dari kami</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <img
                            key={i}
                            className="w-24 h-24 md:w-40 md:h-40 object-cover"
                            src={`/images/product/inspired/inspired${i}.png`}
                            alt={`inspired${i}`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-10 py-4">
                <h1 className="text-xl md:text-2xl">Packaging lain</h1>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {/* {products.slice(0, 4).map((p, idx) => (
            <Card
              key={idx}
              img={`/images/product/${p.img}`}
              name={p.name}
              slug={p.slug}
              tags={p.tags}
            />
          ))} */}
                </div>
            </div>
        </div>
    );
}