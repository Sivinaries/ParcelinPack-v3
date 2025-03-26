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
      <div className="grid grid-cols-1 h-full bg-white w-full">
        <div className="md:my-4 my-2 space-y-8 md:space-y-12">
          <div className="w-11/12 md:w-1/2 mx-auto ">
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="mx-4 md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {filteredProducts.map((product, index) => (
                <Card
                  key={index}
                  img={`http://localhost:8000/storage/${product.img}`}
                  name={product.product}
                  tags={[]}
                  slug={product.id.toString()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}