import { useState } from "react";
import Card from "../../components/Service/Card";
import { useParams } from "react-router-dom";
import HeroProduct from "../../components/Service/HeroProduct";
import Searchbar from "../../components/Service/Searchbar";
import useCategoryById from "../../hooks/useCategoryById";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const { idCategory } = useParams();

  const { category, loading, error } = useCategoryById(idCategory);

  const filteredProducts = category?.kategori?.products?.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!category.kategori.products || category.kategori.products.length === 0) {
    return (
      <p className="text-center text-gray-500">Tidak ada product tersedia.</p>
    );
  }

  console.log(category);

  return (
    <>
      <HeroProduct
        title={category.kategori.kategori}
        desc={category.kategori.desc}
        img={category.kategori.img}
      />
      <div className="flex flex-col justify-center items-center p-6 sm:p-10 my-10 space-y-6">
        <div className="w-full md:w-1/2">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              img={`https://admin.parcelinpack.id/storage/${product.img}`}
              name={product.product}
              tags={[]}
              slug={product.id.toString()}
            />
          ))}
        </div>
      </div>
    </>
  );
}