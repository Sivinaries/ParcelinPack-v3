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

  return (
    <>
      <HeroProduct
        title={category.kategori.kategori}
        desc={category.kategori.desc}
      />
      <div className="p-6 sm:p-10 space-y-6">
        <h1 className="text-3xl font-bold text-black">
          {product.product.product}
        </h1>
        <p>{product.product.desc}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {subProducts.map((product, index) => (
            <Card
              key={index}
              img={`https://admin.parcelinpack.id/storage/${product.img1}`}
              name={product.subproduct}
              tags={product.tags}
              slug={product.id.toString()}
              minOrder={product.min}
              price={formatToIDR(product.price)}
            />
          ))}
        </div>
      </div>
    </>
  );
}