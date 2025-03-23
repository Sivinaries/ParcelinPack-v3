import { useParams } from "react-router-dom";
import useSubProductById from "../../hooks/useSubProductById";
import useCategory from "../../hooks/useCategory";
import MainSection from "../../components/Service/detail/MainSection";
import Advantage from "../../components/Service/detail/Advantage";
import formatToIDR from "../../utils/formatIDR";
import Card from "../../components/Service/Card";
import PropTypes from "prop-types";

export default function Detail({ categories }) {
    const { idSubProduct } = useParams();
    const { subProduct, loading, error } = useSubProductById(idSubProduct);
    const { categories: fetchedCategories } = useCategory(); // Ambil kategori jika tidak lewat props

    if (loading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!subProduct || !subProduct.subproduct) {
        return <p className="text-center text-gray-500">Tidak ada produk tersedia.</p>;
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
    ];

    return (
        <div className="grid grid-cols-1 h-full bg-white w-full">
            <div className="md:my-20 my-8 space-y-4 md:space-y-10">
                <MainSection
                    name={subProduct.subproduct.subproduct}
                    price={formatToIDR(subProduct.subproduct.price)}
                    desc={subProduct.subproduct.desc1}
                    minOrder={subProduct.subproduct.min}
                    tags={subProduct.subproduct.tags?.map(tag => tag.tag) || []} // Hindari error jika tags undefined
                    images={[
                        subProduct.subproduct.img1,
                        subProduct.subproduct.img2,
                        subProduct.subproduct.img3
                    ].filter(Boolean)} // Filter jika ada image null
                    path={[]}
                />

                {advantages.map((advantage, idx) => (
                    <Advantage
                        key={idx}
                        image={advantage.image}
                        desc={advantage.desc}
                        idx={idx}
                    />
                ))}

                {/* INSPIRASI */}
                <div className="bg-gray-100 p-4 md:p-12 space-y-4 md:space-y-10">
                    <h1 className="text-xl md:text-4xl font-extrabold text-center">Temukan inspirasi dari kami</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                className="w-full"
                                src={`/images/product/inspired/inspired${i}.png`}
                                alt={`inspired${i}`}
                            />
                        ))}
                    </div>
                </div>

                {/* PACKAGING LAIN */}
                <div className="p-4 md:p-12 space-y-4 md:space-y-10">
                    <h1 className="text-xl md:text-4xl font-extrabold text-center">Packaging lain</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        {(categories.length ? categories : fetchedCategories).map((category, index) => (
                            <Card
                                key={index}
                                img={`http://localhost:8000/storage/${category.img}`}
                                name={category.kategori}
                                slug={category.id.toString()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Detail.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            img: PropTypes.string.isRequired,
            kategori: PropTypes.string.isRequired,
        })
    ),
};

Detail.defaultProps = {
    categories: [],
};
