import Card from "../../components/Service/Card";
import HeroProduct from "../../components/Service/HeroProduct";
import useCategoryById from "../../hooks/useCategoryById";
import useProductById from "../../hooks/useProductById";
import { useParams } from "react-router-dom";
import useSubProducts from "../../hooks/useSubProducts";
import formatToIDR from "../../utils/formatIDR";

export default function SubProduct() {
  const { idCategory, idProduct } = useParams();

  const { subProducts, loading, error } = useSubProducts();
  const {
    product,
    loading: loadingProduct,
    error: errorProduct,
  } = useProductById(idProduct);
  const {
    category,
    loading: loadingCategory,
    error: errorCategory,
  } = useCategoryById(idCategory);

  if (loading || loadingProduct || loadingCategory) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error || errorProduct || errorCategory) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (
    !subProducts ||
    subProducts.length === 0 ||
    !product ||
    product.length === 0 ||
    !category ||
    category.length === 0
  ) {
    return (
      <p className="text-center text-gray-500">
        Tidak ada sub product tersedia.
      </p>
    );
  }

  console.log(subProducts);

  return (
    <>
      <HeroProduct
        title={category.kategori.kategori}
        img={category.kategori.img}
        desc={category.kategori.desc}
      />
      <div className="grid grid-cols-1 h-full bg-white w-full">
        <div className="md:my-4 my-2">
          <div className="mx-4 md:mx-20 space-y-2 md:space-y-6">
              <h1 className="text-4xl font-bold">{subProducts.length > 0 ? subProducts[0].product.product : "No product found"}</h1>
              <h1 className="font-light text-lg">{subProducts.length > 0 ? subProducts[0].product.desc : "No product desc"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {subProducts.map((product, index) => (
                <Card
                  key={index}
                  img={`http://localhost:8000/storage/${product.img1}`}
                  name={product.subproduct}
                  tags={product.tags ? product.tags.map(tag => tag.tag) : []} // Pastikan tags dalam bentuk array
                  slug={product.id.toString()}
                  minOrder={product.min}
                  price={formatToIDR(product.price)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}